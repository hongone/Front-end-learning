import { inject } from "inversify";
import {fluentProvide, provide, buildProviderModule } from "inversify-binding-decorators";
import * as Router from "koa-router";
import {TYPE, controller,interfaces,httpGet } from "inversify-koa-utils";
let proddeController = function(identifer,name){
    return fluentProvide(identifer)
    .whenAnyAncestorNamed(name)
    .done();
}
export {
    proddeController,Router, provide, controller,interfaces,inject,httpGet,buildProviderModule,TYPE
}
