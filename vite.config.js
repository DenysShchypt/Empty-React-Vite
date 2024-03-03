import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import FullReload from 'vite-plugin-full-reload';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), FullReload(['./**/**.html'])
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "./dist",
    assetsDir: "assets",
  },
  css: {
    modules: false,
  },
})
