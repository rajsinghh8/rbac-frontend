import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    port: 57653,
    strictPort: true,
    allowedHosts: ['.trycloudflare.com'],
  },
  // @ts-expect-error Vitest reads this configuration key at runtime.
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
