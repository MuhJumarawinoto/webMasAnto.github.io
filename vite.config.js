import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Direktori output hasil build
    emptyOutDir: false, // Jangan hapus konten direktori output sebelum build
    rollupOptions: {
      input: {
        main: './index.html' // File HTML utama yang akan menjadi entry point
      }
    }
  }
})
