import "reflect-metadata"; //必须引用，否则运行不起来
import * as bodyParser from 'koa-bodyparser';
 
import { Container } from 'inversify';
import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';
import "./ioc/loader";
import {buildProviderModule} from "./ioc/ioc";
 
// set up container
let container = new Container();
//核心，告诉container  你用我方式取找@provide @injectable
container.load(buildProviderModule())
// note that you *must* bind your controllers to Controller
// container.bind<interfaces.Controller>(TYPE.Controller).to(FooController).whenTargetNamed('FooController');
// container.bind<FooService>('FooService').to(FooService);
 
// create server
let server = new InversifyKoaServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser());
});
 
let app = server.build();
app.listen(3000);