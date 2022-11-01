import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 基础地址
  base: '/shige',
  plugins: [vue()]
})
