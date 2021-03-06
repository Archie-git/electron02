import {defineConfig} from "vite";
import path from "path";
import vue from '@vitejs/plugin-vue';
import alias from "@rollup/plugin-alias";

export default defineConfig({
  plugins: [alias(), vue()],
  root: './window',
  base: './',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../src/window',
    assetsDir: './assets',
    rollupOptions: {
      input: {
        basic: './window/basic.html',
        commodity: './window/commodity.html',
      },
      // output: {
      //   assetFileNames: 'jjj',
      // },
    },
    emptyOutDir: true,
  },
});
