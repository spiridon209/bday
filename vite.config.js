import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Укажите имя репозитория между слешами для проектной страницы
  base: '/bday/',
})
