/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 接口名和底层vite/client中名称一致，则会合并成一个interface
interface ImportMetaEnv {
  VITE_username: string;
  VITE_age: number;
}
