'use strict';

var router = require('koa-simple-router');
var svstatic = require('koa-static');
var cors = require('koa-cors');
var options = {
    origin: 'http://127.0.0.1:9000'
};
var initController = {
    init: function init(app, config) {
	app.use(cors(options));
        app.use(svstatic(config.get('publicdir')));

    }
};
module.exports = initController;
