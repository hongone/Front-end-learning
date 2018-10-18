'use strict';

var router = require('koa-simple-router');
var serve = require('koa-static');
var mount = require("koa-mount");
var cors = require('koa-cors');
var options = {
    origin: 'http://127.0.0.1:9000'
};
var initController = {
    init: function init(app, config) {
        app.use(cors(options));
        app.use(mount("/public", serve(config.get('publicdir'))));

    }
};
module.exports = initController;