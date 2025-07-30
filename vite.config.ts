import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cleanPlugin from 'vite-plugin-clean';
import postcss from './postcss.config';

export default defineConfig({
  plugins: [
    react(),
    cleanPlugin({
      targetFiles: ['dist'],
    }),
  ],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'BoomiEmbedJS',
      fileName: 'embed-js',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
});
