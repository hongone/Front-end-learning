//import path  from 'path';
//import {extend}  from 'lodash-es';
import {extend}  from 'lodash';
//公用的配置
let config ={
    env : process.env.NODE_ENV
}
if(false){
    console.log(1)
}
if(process.env.NODE_ENV=='development'){
    const localConfig ={
        
        port : 8081
    }
    config = extend(config,localConfig);
}
if(process.env.NODE_ENV=='production'){
    const localConfig ={
        
        port : 80
    }
    config = extend(config,localConfig);
}

export default config;