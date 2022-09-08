import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //vite开发服务器配置
  server: {
    // 反向代理
    //将/api路径的代理到8080地址去,但是浏览器还是以vue5173的端口路径去访问
    proxy: {
      '/api': {
        target: 'http://localhost:8080',    //重点是这里的对应端口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
