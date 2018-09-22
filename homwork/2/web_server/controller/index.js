const router = require('koa-simple-router');
const Praise = require('../module/praise');
const routers = router(_ => {
    _.get('/index/index', async (ctx, next) => {
        ctx.body = await ctx.render('index');
    })
    _.get('/index/praise', async (ctx, next) => {

        ctx.body =  await (new Praise()).post();
    })
});
module.exports = routers;