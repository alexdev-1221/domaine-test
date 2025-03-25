import { defineConfig } from 'vite'

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
        assetFileNames: '[name].[extname]',
      }
    },
  }
})
