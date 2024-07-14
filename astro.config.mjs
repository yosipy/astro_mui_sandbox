import { defineConfig } from "astro/config";
import { pigment } from "@pigment-css/vite-plugin";

import react from "@astrojs/react";

const pigmentConfig = {};

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [pigment(pigmentConfig)],
  },
});
