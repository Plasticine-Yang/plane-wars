import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
    },
  },
  plugins: [vue()],
});
