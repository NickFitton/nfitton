import type { Recipe, Recipes, Step } from '../../pages/christmas/content';

export type Task = {
  group: string;
  name: string;
  color: string;
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

const determineTaskColor = (uses: Step['uses']): string => {
  switch (uses) {
    case 'hob-pot':
      return '#7851A9';
    case 'hob-pan':
      return '#614051';
    case 'oven':
      return '#483D8B';
    case 'worktop':
      return '#4D0030';
    case 'chopping board':
      return '#9966CC';
    case 'blender':
      return '#702963';
    case 'fridge':
      return '#9400D3';
    case 'microwave':
      return '#4B0082';
    case 'slow-cooker':
      return '#8E4585';
    case 'air-fryer':
      return '#8A2BE2';
    case 'kettle':
      return '#800080';
    case 'serving-tray':
      return '#FFF0F5';
    default:
      return '#fff';
  }
};

export const buildTasksFromRecipes = (recipes: Recipes): GroupedTasks => {
  const taggedRecipes = Object.values(recipes)
    .flatMap(Object.entries)
    .map(([tag, recipe]) => ({ ...recipe, tag }) as Recipe & { tag: string });

  const recipeTasks = taggedRecipes.flatMap(({ name: recipeName, method }) => {
    const tasks: Task[] = [];
    method.map((step) => {
      const dateRange = determineDateRange(step, tasks);
      const color = determineTaskColor(step.uses);
      tasks.push({ ...dateRange, group: recipeName, color, name: step.name });
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
