import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      input: {
         styles: './src/main.css',
      },
      output: {
        assetFileNames: '[name][extname]',
      }
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})
