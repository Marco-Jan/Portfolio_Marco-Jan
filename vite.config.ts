import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  },
  server: {
    host: '0.0.0.0', // Erlaubt externe Verbindungen
    port: 5174
  }
})
