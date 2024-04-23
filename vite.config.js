import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',
  build: {
    outDir: 'build',
  },
});
