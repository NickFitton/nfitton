import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const skillCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const cardCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cards' }),
  schema: z.object({
    title: z.string(),
    to: z.string(),
    from: z.string(),
    cardMessage: z.string(),
    coverImgPath: z.string(),
    aspectRatio: z.string(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  skills: skillCollection,
  cards: cardCollection,
  blog: blogCollection,
};
