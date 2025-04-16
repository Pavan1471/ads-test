
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),     // React SWC plugin
    mkcert()     // SSL for local dev
  ],
  publicDir: './public',
  server: {
    host: true
  }
});