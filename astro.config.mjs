import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://molswitch.earth",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: netlify(),
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
