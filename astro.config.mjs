import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 🔍 SANITY CHECK: Verified base URL for GitHub Pages
  site: 'https://xD0ri4nx.github.io',
  
  // 🔍 SANITY CHECK: The sub-path of your repository
  base: '/portfolio.astro/',
  
  // Ensures Vite processes Tailwind v4 correctly during the production build
  vite: {
    plugins: [tailwindv4()],
  },
});