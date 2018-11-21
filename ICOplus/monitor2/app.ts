import "reflect-metadata";
import {  Container } from "inversify";
import {  buildProviderModule } from "./ioc/ioc";
import { interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';
import * as bodyParser from 'koa-bodyparser';
import  './ioc/loader';




var container = new Container();

container.load(buildProviderModule());
//创建inversify的koa服务
let server = new InversifyKoaServer(container);

server.setConfig((app) => {
  // add body parser
  app.use(bodyParser());
});

let app = server.build();
app.listen(3000);