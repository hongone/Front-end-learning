import { injectable, inject } from "inversify";
import { fluentProvide, provide, buildProviderModule } from 'inversify-binding-decorators' ;
import { TYPE, controller,interfaces,httpGet } from 'inversify-koa-utils' ;
import * as Router from "koa-router";
let provideController = function(identifer,name){
    return fluentProvide(identifer)
    .whenAnyAncestorNamed(name)
    .done();
}
export {Router,provideController,injectable, inject ,fluentProvide, provide, buildProviderModule,TYPE, controller,interfaces,httpGet } ;