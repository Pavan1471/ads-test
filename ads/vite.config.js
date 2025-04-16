
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react()// React SWC plugin
      // SSL for local dev
  ],
  publicDir: './public',
  server: {
    host: true
  }
});