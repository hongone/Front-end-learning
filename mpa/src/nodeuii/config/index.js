import path  from 'path';
import { extend } from 'lodash'

// 公用的配置
let config = {
  env: process.env.NODE_ENV,
  logPath :  path.resolve(__dirname ,'../log/')
}

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081
  }
  config = extend(config, localConfig)
}
if (process.env.NODE_ENV == 'production') {
  const localConfig = {
    port: 8000
  }
  config = extend(config, localConfig)
}

export default config
