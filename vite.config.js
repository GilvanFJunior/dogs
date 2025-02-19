import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true }, // Not needed for Vite 5+
  plugins: [react(), svgr(), mkcert()],
});
