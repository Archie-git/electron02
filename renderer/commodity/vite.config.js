import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [vue()],
  root: __dirname,
  server: {
    port: 3002,
  }
})
