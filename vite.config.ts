import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// GitHub Pages project site: https://<user>.github.io/MotionComicStudioHome/
// Override with VITE_BASE=/ for custom domain or user site root.
const base = process.env.VITE_BASE || '/MotionComic/';

export default defineConfig({
  base,
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'privacy-policy-en': resolve(__dirname, 'privacy-policy-en.html'),
        'privacy-policy-zh': resolve(__dirname, 'privacy-policy-zh.html'),
        support: resolve(__dirname, 'support.html'),
        'support-zh': resolve(__dirname, 'support-zh.html'),
      },
    },
  },
});
