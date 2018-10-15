'use strict';

var router = require('koa-simple-router');
var svstatic = require('koa-static');
var routers = require('./routerController');
var initController = {
    init: function init(app, config) {
        app.use(svstatic(config.get('publicdir')));
        app.use(router(function (_) {
            _.get('/index/index', routers.index());
            _.get('/index/post', routers.post());
            _.get('/index/praise', routers.praise());
            _.get('/index/star', routers.star());
            _.get('/index/adv', routers.adv());
        }));
    }
};
module.exports = initController;