import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import vue from "@astrojs/vue";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [vue(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), analogjsangular()]
});