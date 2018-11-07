import Koa from 'koa';
import config from './config';
import router  from 'koa-simple-router';
import routesInit from './routes/routesInit';
import errorHander from './middlewares/errorHandler'
import log4js from 'log4js';
import serve from 'koa-static';
import render from 'koa-swig';
import co from 'co';

log4js.configure({
  appenders: { cheese: { type: 'file', filename: config.logPath + '/error.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
const app = new Koa();
app.use(serve(config.staticDir));

app.context.render = co.wrap(render({
  root: config.viewsDir,
  autoescape: true,


  writeBody: false
}));
 
app.use(async ctx => ctx.body = await ctx.render('index'));
routesInit.init(app,router);
errorHander.error(app,logger);
app.listen(config.port,() => {
    console.log(`server is running on ${config.port}`);
})
