import { defineConfig } from "astro/config"
import { pigment } from "@pigment-css/vite-plugin"
import { extendTheme } from "@mui/material"

import react from "@astrojs/react"

const pigmentConfig = { theme: extendTheme() }

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [pigment(pigmentConfig)],
  },
})
