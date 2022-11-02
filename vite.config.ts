import { CommonServerOptions, ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import dotenv, { DotenvParseOutput } from 'dotenv'

// https://vitejs.dev/config/
// export default defineConfig({
//   // 基础地址
//   base: '/shige',
//   plugins: [vue()]
// })

export default defineConfig((mode) => {
  // 拼接当前环境文件名（这里使用了dotenv）
  const envFileName: string = '.env'
  const curEnvFileName: string = `${envFileName}.${mode.mode}`;

  let server: CommonServerOptions = {}
  const envData = fs.readFileSync(curEnvFileName)
  const envMap: DotenvParseOutput = dotenv.parse(envData)
  console.log(envMap)
  
  if (mode.mode === 'development') {
    server = {
      host: envMap.VITE_HOST,
      port: envMap.VITE_PORT,
      // 代理的目的，就是让不同的域变成同源
      proxy: {
        [envMap.VITE_BASE_URL]: {
          target: envMap.VITE_PROXY_DOMAIN
        }
      }
    }
    console.log('开发环境', server)
  }
  else if (mode.mode === 'production') {
    console.log('生产环境')
  }
  return {
    plugins: [vue()]
  }
})
