import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@theme': path.resolve(__dirname, './src/theme'),
            '@pages': path.resolve(__dirname, './src/pages'),
        },
    },
    optimizeDeps: {
        include: ['@mui/material', '@emotion/react', '@emotion/styled'],
    },
})
