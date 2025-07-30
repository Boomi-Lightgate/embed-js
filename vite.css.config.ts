import { defineConfig } from 'vite';
import postcss from './postcss.config.js';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.css',
      output: {
        dir: 'src',
        assetFileNames: 'compiled.css',
      },
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
  css: {
    postcss,
  },
});