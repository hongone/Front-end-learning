'use strict';

var router = require('koa-simple-router');
var serve = require('koa-static');
var mount = require("koa-mount");

var routers = require('./routerController');
var initController = {
    init: function init(app, config) {

        app.use(router(function (_) {
            _.get('/index/index', routers.index());
            _.get('/index/post', routers.post());
            _.get('/index/praise', routers.praise());
            _.get('/index/star', routers.star());
            _.get('/index/adv', routers.adv());
        }));
        app.use(mount("/public", serve(config.get('publicdir'))));
    }
};
module.exports = initController;