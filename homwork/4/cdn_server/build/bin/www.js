'use strict';

var app = require('../app');
var config = require('../config/');
var server = app.listen(config.get('svport'));
console.log(config.get('svhostname') + ' Server running at: ' + config.get('svport'));