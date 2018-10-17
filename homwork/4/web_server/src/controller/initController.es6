const router = require('koa-simple-router');
const svstatic = require('koa-static');
const routers = require('./routerController');
const initController = {
    init : (app,config)=>{

        app.use(svstatic(config.get('publicdir')));
        app.use(router(_ => {
            _.get('/index/index', routers.index());
            _.get('/index/post', routers.post());
            _.get('/index/praise', routers.praise());
            _.get('/index/star', routers.star());
            _.get('/index/adv', routers.adv());
        }));
    } 
};
module.exports = initController;