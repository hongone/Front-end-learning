'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

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

// @route('/index.html')
let DataController = (_dec = (0, _awilixKoa.route)('/data'), _dec2 = (0, _awilixKoa.route)('/index'), _dec3 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class DataController {
  constructor({ dataService }) {
    // 注入indexService
    this.dataService = dataService;
  }
  // @route('/index')  是访问 locahost:8000//index

  async indexAction(ctx, next) {
    let result = await this.dataService.getdata();
    // console.log(result1); 故意写错，来测试错误捕捉处理

    // ctx.body = await ctx.render('index', { content: result });
    ctx.body = { result };
  }

}, (_applyDecoratedDescriptor(_class2.prototype, 'indexAction', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'indexAction'), _class2.prototype)), _class2)) || _class);
exports.default = DataController;