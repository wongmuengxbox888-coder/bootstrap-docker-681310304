import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        host: '0.0.0.0', // เปิดให้ Docker Container กระจายพอร์ตออกสู่ภายนอก
        port: 5173,      // กำหนดพอร์ตหลัก
        strictPort: true,
        watch: {
            usePolling: true // สั่งให้สแกนการเปลี่ยนแปลงไฟล์อย่างสม่ำเสมอบน Docker Volume
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                article: resolve(__dirname, 'article.html'),
            }
        }
    }
});