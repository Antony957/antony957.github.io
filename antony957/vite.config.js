import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    appType: "mpa",
    server: {
        port: 5173,
        open: true,
    },
    resolve: {
        alias: {
            '@': './src'
        }
    },
    build: {
        rollupOptions: {
            input: {
                'home': './index.html',
                'blogs': './blogs.html',
                '404':'./404.html',
            }
        }
    },
    base: '/',
})