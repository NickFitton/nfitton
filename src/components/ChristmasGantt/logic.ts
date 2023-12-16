import type { Recipe, Recipes, Step } from '../../pages/christmas/content';

export type Task = {
  group: string;
  name: string;
  startDate: Date;
  endDate: Date;
};

export type GroupedTasks = {
  eve: Task[];
  day: Task[];
};

const christmasDay = new Date(2023, 12, 25);

const minsToMillis = (minutes: number): number => minutes * 60 * 1000;

const determineDateRange = (
  step: Step,
  builtTasks: Task[]
): { startDate: Date; endDate: Date } => {
  let startDate = step.startTime;
  if (step.dependsOn) {
    const task = builtTasks.find(({ name }) => name === step.dependsOn);
    if (!task) {
      throw new Error(
        `${step.name} depends on ${step.dependsOn} which could not be found`
      );
    }
    startDate = task.endDate;
  }
  if (!startDate) {
    throw new Error(`${step.name} had neither dependsOn or startTime.`);
  }

  const endDate = new Date(
    startDate.getTime() + minsToMillis(step.durationMins)
  );
  return { startDate, endDate };
};

export const buildTasksFromRecipes = (recipes: Recipes): GroupedTasks => {
  const taggedRecipes = Object.values(recipes)
    .flatMap(Object.entries)
    .map(([tag, recipe]) => ({ ...recipe, tag }) as Recipe & { tag: string });

  const recipeTasks = taggedRecipes.flatMap(({ name: recipeName, method }) => {
    const tasks: Task[] = [];
    method.map((step) => {
      const dateRange = determineDateRange(step, tasks);
      tasks.push({ ...dateRange, group: recipeName, name: step.name });
    });
    return tasks;
  });

  return recipeTasks.reduce(
    (groups, task) => {
      if (task.startDate.getTime() > christmasDay.getTime()) {
        return { eve: groups.eve, day: [...groups.day, task] };
      }
      return { eve: [...groups.eve, task], day: groups.day };
    },
    { eve: [], day: [] } as GroupedTasks
  );
};
