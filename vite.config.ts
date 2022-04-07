/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
// import legacyPlugin from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    eslintPlugin,
    react(),
    // legacyPlugin({
    //   targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
    // }),
  ],
  base: isDev ? '/' : 'https://bucker-for-sae.oss-cn-hangzhou.aliyuncs.com/simple-blog/assets/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
    open: true,
  },
  css: {
    modules: {
      hashPrefix: '',
      generateScopedName: '',
    },
  },
  build: {
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
