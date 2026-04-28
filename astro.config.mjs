import { defineConfig } from 'astro/config';
import tailwindv4 from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://xD0ri4nx.github.io',
  
  // 🔍 SANITY CHECK: This tells both local dev and GitHub Pages where your site lives!
  base: '/portfolio', 
  
  build: {
    assetsPrefix: './'
  },
  vite: {
    plugins: [tailwindv4()],
  },
});