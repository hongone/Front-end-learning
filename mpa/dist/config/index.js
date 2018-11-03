'use strict';

var lodash = require('lodash');

//import path  from 'path';
//import {extend}  from 'lodash-es';
//公用的配置
let config ={
    env : "production"
};
{
    const localConfig ={
        
        port : 80
    };
    config = lodash.extend(config,localConfig);
}

var config$1 = config;

module.exports = config$1;
