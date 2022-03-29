import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import config from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${config.name}` : undefined,
  plugins: [react()],
})
