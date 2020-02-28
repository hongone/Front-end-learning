'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

var _awilixKoa = require('awilix-koa');

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

// @route('/data')
let AataController = (_dec = (0, _awilixKoa.route)('/customer'), _dec2 = (0, _awilixKoa.route)('/'), _dec3 = (0, _awilixKoa.GET)(), _dec4 = (0, _awilixKoa.route)('/:id'), _dec5 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class AataController {
  constructor({ dataService }) {
    // 注入indexService
    this.dataService = dataService;
  }

  async list(ctx, next) {
    const result = 'costomer1,costomer2';
    console.log(result);
    ctx.body = result;
  }

  async one(ctx, next) {
    const result = 'costomer1';
    console.log(result);
    ctx.body = result;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, 'list', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'list'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'one', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'one'), _class2.prototype)), _class2)) || _class);
exports.default = AataController;