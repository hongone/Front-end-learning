import Koa from 'koa';
import config from './config';
import {createContainer,Lifetime} from 'awilix';
import {loadControllers,scopePerRequest} from 'awilix-koa'; 
import errorHander from './middlewares/errorHandler';

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


app.context.render = co.wrap(render({
  root: config.viewsDir,
  autoescape: true,
  writeBody : false
}));

//注意：错误捕捉要放在前面，放在后面无法处理 
errorHander.error(app,logger);
const container = createContainer();
//每一次请求
app.use(scopePerRequest(container));
//装载所有的Service到容器去。载入controllers
container.loadModules([__dirname +'/services/*.js'],{
  formatName: 'camelCase',
  resolverOption:{
    
    lifetime : Lifetime.SCOPED
  }
}
);
//载入controllers
app.use(loadControllers(__dirname + '/routes/*.js'));


app.use(serve(config.staticDir));

app.listen(config.port,() => {
    console.log(`server is running on ${config.port}`);
})
