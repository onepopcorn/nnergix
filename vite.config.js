import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nnergix/',
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    "process.env.APP_BASE_URL": `"${process.env.NODE_ENV === 'production' ? '/nnergix' : ''}"`
  },
})
