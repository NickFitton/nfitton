import type { Recipe, Recipes, Step } from './content';

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

type StartingTask = Omit<Task, 'startDate' | 'endDate'> & {
  durationMins: number;
  startTime: Date;
};
type DependentTask = Omit<Task, 'startDate' | 'endDate'> & {
  durationMins: number;
  dependsOn: string;
};

type TerribleTask = StartingTask | DependentTask;
type SeparatedTasks = {
  first: StartingTask[];
  rest: DependentTask[];
};
const buildDependentTasks = (
  taggedRecipes: (Recipe & { tag: string })[]
): Task[] => {
  const terribleTasks = taggedRecipes.flatMap((recipe) =>
    recipe.method.map((step): TerribleTask => {
      const color = determineTaskColor(step.uses);
      const base = {
        group: recipe.tag,
        name: recipe.tag + '.' + step.name,
        color,
        durationMins: step.durationMins,
      };
      if (step.dependsOn) {
        return {
          ...base,
          dependsOn: step.dependsOn.includes('.')
            ? step.dependsOn
            : `${base.group}.${step.dependsOn}`,
        };
      } else if (step.startTime) {
        return { ...base, startTime: step.startTime };
      } else {
        throw new Error(
          `Step '${step.name}' has neither dependsOn or startTime.`
        );
      }
    })
  );

  const { first, rest } = terribleTasks.reduce(
    (agg, next) => {
      if ((next as StartingTask).startTime) {
        return {
          first: [...agg.first, next],
          rest: agg.rest,
        } as SeparatedTasks;
      }
      return {
        first: agg.first,
        rest: [...agg.rest, next as DependentTask],
      } as SeparatedTasks;
    },
    {
      first: [],
      rest: [],
    } as SeparatedTasks
  );

  if (first.length === 0) {
    throw new Error('No tasks to start from.');
  }

  let tasks: Task[] = first.map((task) => {
    const endDate = new Date(
      task.startTime.getTime() + minsToMillis(task.durationMins)
    );
    return {
      ...task,
      startDate: task.startTime,
      endDate: endDate,
    };
  });

  let miss = rest;
  let lastMissLength: number = -1;
  let buffer = tasks;
  while (miss.length !== 0 && lastMissLength !== miss.length) {
    lastMissLength = miss.length;

    const { hit, missed } = miss.reduce(
      (agg, next) => {
        const foundDependent = buffer.find(
          ({ name }) => name === next.dependsOn
        );
        if (foundDependent) {
          return {
            hit: [...agg.hit, dependentToTask(next, foundDependent)],
            missed: agg.missed,
          };
        }
        return { hit: agg.hit, missed: [...agg.missed, next] };
      },
      {
        hit: [] as Task[],
        missed: [] as DependentTask[],
      }
    );

    tasks.push(...hit);
    buffer = hit;
    miss = missed;
  }
  if (miss.length !== 0) {
    console.error(`Some tasks did not have dependents found for them.`);
  }

  return tasks;
};

const dependentToTask = (dependent: DependentTask, peer: Task): Task => {
  const endDate = new Date(
    peer.endDate.getTime() + minsToMillis(dependent.durationMins)
  );
  return {
    ...dependent,
    startDate: peer.endDate,
    endDate,
  };
};

export const buildTasksFromRecipes = (recipes: Recipes): GroupedTasks => {
  const taggedRecipes = Object.values(recipes)
    .flatMap(Object.entries)
    .map(([tag, recipe]) => ({ ...recipe, tag }) as Recipe & { tag: string });

  // I wish groupBy worked.
  return buildDependentTasks(taggedRecipes).reduce(
    (groups, task) => {
      if (task.startDate.getTime() > christmasDay.getTime()) {
        return { eve: groups.eve, day: [...groups.day, task] };
      }
      return { eve: [...groups.eve, task], day: groups.day };
    },
    { eve: [], day: [] } as GroupedTasks
  );
};
