/*
  Design note — vite.config.ts
  Filosofie: infrastructură discretă. Configurația trebuie să susțină inspectarea rapidă,
  rutarea actuală și un build mai bine împărțit pentru paginile refactorizate.
*/

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { inspectAttr } from 'plugin-inspect-react-code';

export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          animation: ['gsap'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
