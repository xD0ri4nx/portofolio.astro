import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  // This is the critical part for Tailwind v4
  vite: {
    plugins: [tailwindv4()],
  },
});