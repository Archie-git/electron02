import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
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