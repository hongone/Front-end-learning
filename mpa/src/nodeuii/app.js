import Koa from 'koa';
import config from './config';
import router  from 'koa-simple-router';
import routeInit from './routes/routeInit';
import errorHander from './middlewares/errorHandler'
import log4js from 'log4js';

log4js.configure({
  appenders: { cheese: { type: 'file', filename: config.logPath + '/error.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
const app = new Koa();
routeInit.init(app,router);
errorHander.error(app,logger);
app.listen(config.port,() => {
    console.log(`server is running on ${config.port}`);
})
