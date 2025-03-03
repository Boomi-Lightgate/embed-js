import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'BoomiPlugin',
      fileName: (format) => `boomi-dropin-ui-plugin.${format}.js`, // Output file name
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Prevent bundling of React
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      enabled: true,
      reporter: ['text'],
    },
  },
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
