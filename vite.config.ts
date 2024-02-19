import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build({
      entry: 'src/index.ts'
    }),
    devServer({
      entry: 'src/index.ts',
    })
  ]
})
