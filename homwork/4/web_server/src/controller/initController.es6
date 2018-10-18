const router = require('koa-simple-router');
const serve = require('koa-static');
const mount = require("koa-mount");

const routers = require('./routerController');
const initController = {
    init : (app,config)=>{
        
        app.use(router(_ => {   
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