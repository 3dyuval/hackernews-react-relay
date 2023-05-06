import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'
import relay from 'vite-plugin-relay'

export default defineConfig({
  plugins: [react(), relay],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@generated': path.resolve(__dirname, './src/__generated__'),
    },
  },
  server: {
    port: 3030,
  },
})
