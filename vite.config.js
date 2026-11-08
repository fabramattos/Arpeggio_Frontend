import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente (.env.development, .env.prod, etc.)
    const env = loadEnv(mode, process.cwd(), '');
    const apiTarget = env.VITE_API_TARGET || (mode === 'prod' ? 'https://arpeggio.up.railway.app' : 'http://localhost:8080');

    return {
        server: {
            port: 8081,
            proxy: {
                '/v1': {
                    target: apiTarget,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        preview: {
            port: 8081,
            proxy: {
                '/v1': {
                    target: apiTarget,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    };
});
