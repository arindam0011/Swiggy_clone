import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "/Swiggy_clone/",
  server: {
    proxy: {
      '/api': {
        target: 'https://www.swiggy.com', // Your API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' from the request
      },
    },
  },
})
