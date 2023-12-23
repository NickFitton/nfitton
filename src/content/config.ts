import { z, defineCollection } from 'astro:content';

const skillCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const cardCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    to: z.string(),
    from: z.string(),
    cardMessage: z.string(),
    coverImgPath: z.string(),
    aspectRatio: z.string(),
  }),
});

export const collections = {
  skills: skillCollection,
  cards: cardCollection,
};
