import {defineConfig} from "vite";
import path from "path";
import vue from '@vitejs/plugin-vue';
import resolve from "rollup-plugin-node-resolve";

export default defineConfig({
  plugins: [vue(), resolve()],
  root: 'window',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../src/window',
    rollupOptions: {
      input: {
        basic: path.resolve(__dirname, 'window/basic/index.html'),
        commodity: path.resolve(__dirname, 'window/commodity/index.html')
      },
    }
  }
})
