import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Preserve spacing between inline elements across the Astro 7 migration.
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      langs: ['go'],
      wrap: true,
      transformers: [],
    },
  },
  integrations: [mdx()],
});
