import { z, defineCollection } from 'astro:content';

const skillCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  skills: skillCollection,
};
