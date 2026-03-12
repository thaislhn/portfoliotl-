import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 📝 Pour GitHub Pages : définir VITE_BASE=/portfolio-/ dans les variables d'env
  // Pour Netlify/Vercel : laisser vide (base = '/')
  base: process.env.VITE_BASE ?? '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})