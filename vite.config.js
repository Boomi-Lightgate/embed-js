import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
})
