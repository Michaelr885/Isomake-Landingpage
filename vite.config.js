import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                datenschutz: resolve(__dirname, 'datenschutz.html'),
                impressum: resolve(__dirname, 'impressum.html'),
                agb: resolve(__dirname, 'agb.html'),
            },
        },
    },
});
