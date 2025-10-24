import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // GitHub repo name here
  plugins: [
    react(),
    tailwindcss(), // This enables Tailwind with Vite
  ],
})
