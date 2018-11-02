import path  from ('path');
import {extend}  from ('lodash-es');
//公用的配置
let config ={
    env : process.env.NODE_ENV
}
if(config.env=='development'){
    const localConfig ={
        
        port : 8081
    }
    config = extend(config,localConfig);
}
if(config.env=='production'){
    const localConfig ={
        
        port : 80
    }
    config = extend(config,localConfig);
}

export default conifg;