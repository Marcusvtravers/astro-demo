// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://enchanting-horse-16cdbd.netlify.app/",
  integrations: [preact()]
});