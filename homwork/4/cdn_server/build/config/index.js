'use strict';

var path = require('path');
var config = new Map();
config.set('svhostname', 'CDN');
config.set('svhost', '127.0.0.1');
config.set('svport', '8888');
config.set('publicdir', path.join(__dirname, '../../../web_server/build/public'));
console.log(config.get('publicdir'));
config.set('viewsdir', path.join(__dirname, '../views'));
module.exports = config;
