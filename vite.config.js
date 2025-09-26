import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'], // <- ✅ allows direct @import 'bootstrap/...'
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional: allows @/assets etc.
    },
  },
})
