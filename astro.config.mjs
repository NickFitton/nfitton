import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
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
