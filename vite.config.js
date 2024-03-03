import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { injectHTML } from 'vite-plugin-html';
import FullReload from 'vite-plugin-full-reload';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    , injectHTML(), FullReload(['./**/**.html'])
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
