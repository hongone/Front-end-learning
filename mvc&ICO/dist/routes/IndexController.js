'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

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
let IndexController = (_dec = (0, _awilixKoa.route)('/'), _dec2 = (0, _awilixKoa.route)('index'), _dec3 = (0, _awilixKoa.GET)(), _dec4 = (0, _awilixKoa.route)('test'), _dec5 = (0, _awilixKoa.GET)(), _dec6 = (0, _awilixKoa.POST)(), _dec(_class = (_class2 = class IndexController {
  constructor({ indexService }) {
    // 注入indexService
    this.indexService = indexService;
  }
  // @route('/index')  是访问 locahost:8000//index

  async indexAction(ctx, next) {
    let result = await this.indexService.getdata();
    // console.log(result1); 故意写错，来测试错误捕捉处理

    // ctx.body = await ctx.render('index', { content: result });
    ctx.body = { result };
  }

  async testAction(ctx, next) {
    ctx.body = await ctx.render('index/pages/test', { content: 'test' });
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'indexAction', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'indexAction'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'testAction', [_dec4, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'testAction'), _class2.prototype)), _class2)) || _class);
exports.default = IndexController;