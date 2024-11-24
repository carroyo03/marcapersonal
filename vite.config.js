import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [react(),compression()],
  server: {
    port: 3000,
  },
})
