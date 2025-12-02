import { defineConfig } from 'vite';

export default defineConfig({
    // root: 'Frontend',
    server: {
        port: 8081,
        proxy: {
            '/v1': {
                // target: 'http://arpeggio.up.railway.app',
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
