const router = require('koa-simple-router');
const pastPraise = require('../module/praise');
const routers = router(_ => {
    _.get('/index/index', async (ctx, next) => {
        ctx.body = await ctx.render('index');
    })
    _.get('/index/praise', async (ctx, next) => {
       ctx.body =  await pastPraise();
    })
});
module.exports = routers;