'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var lodash = require('lodash');

// 公用的配置
let config = {
  env: "production",
  logPath :  path.resolve(__dirname ,'../log/')
};

{
  const localConfig = {
    port: 8000
  };
  config = lodash.extend(config, localConfig);
}

var config$1 = config

module.exports = config$1;
