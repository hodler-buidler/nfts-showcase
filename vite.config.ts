import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import istanbul from 'rollup-plugin-istanbul'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vitePluginRequire from 'vite-plugin-require'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      process: path.resolve(__dirname, 'polyfills/process-es6.js'),
      'readable-stream': 'vite-compatible-readable-stream',
    },
  },
  plugins: [
    vitePluginRequire(),
    tsconfigPaths(),
    react(),
    eslintPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.png',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        theme_color: '#BD34FE',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    mode === 'test' &&
      istanbul({
        include: ['src/**/*.tsx']
      })
  ]
}))
