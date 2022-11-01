import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 获取vite环境变量（来自于vite-env里面的vite/client全局依赖库）
// 这里的环境优先从特定环境中找，否则去env里找，再找不到返回undefined
console.log(import.meta.env.VITE_username, import.meta.env.VITE_age, import.meta.env.test)

createApp(App).mount('#app')
