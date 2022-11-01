import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   // 基础地址
//   base: '/shige',
//   plugins: [vue()]
// })

export default defineConfig((mode) => {
  // 拼接当前环境文件名
  const envFileName: string = '.env'
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;
  if (mode.mode === 'development') {
    console.log('开发环境')
  }
  else if (mode.mode === 'production') {
    console.log('生产环境')
  }
  return {
    plugins: [vue()]
  }
})
