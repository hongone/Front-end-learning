import { inject } from "inversify";
import {fluentProvide, provide, buildProviderModule } from "inversify-binding-decorators";
import * as Router from "koa-router";
import {TYPE, controller,interfaces,httpGet } from "inversify-koa-utils";
let provideController = function(identifer,name){
    return fluentProvide(identifer)
    .whenAnyAncestorNamed(name)
    .done();
}
export {
    provideController,Router, provide, controller,interfaces,inject,httpGet,buildProviderModule,TYPE
}
