import 'dotenv'

// 和底层dotenv里面同名interface合并
declare module 'dotenv' {
  export interface DotenvParseOutput {
    VITE_HOST: string;
    VITE_PORT: number;
    VITE_BASE_URL: string;
    VITE_PROXY_DOMAIN: string;
  }
}
