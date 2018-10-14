'use strict';

var path = require('path');
var config = new Map();
config.set('svhostname', 'web');
config.set('svhost', 'localhost');
config.set('svport', '9000');
config.set('publicdir', path.join(__dirname, '../public'));
config.set('viewsdir', path.join(__dirname, '../views'));
module.exports = config;