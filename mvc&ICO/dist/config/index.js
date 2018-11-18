'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 公用的配置
let config = {
  env: process.env.NODE_ENV,
  logPath: _path2.default.resolve(__dirname, '../log/'),
  staticDir: _path2.default.resolve(__dirname, '../assets/'),
  viewsDir: _path2.default.resolve(__dirname, '../views/')
};

if (process.env.NODE_ENV == 'development') {
  const localConfig = {
    port: 8081
  };
  config = (0, _lodash.extend)(config, localConfig);
}
if (process.env.NODE_ENV == 'production') {
  const localConfig = {
    port: 8000
  };
  config = (0, _lodash.extend)(config, localConfig);
}

exports.default = config;