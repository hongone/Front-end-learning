'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IndexModule = require('../modules/IndexModule');

var _IndexModule2 = _interopRequireDefault(_IndexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
    indexAction() {

        return async (ctx, next) => {
            let indexmodule = new _IndexModule2.default(ctx);
            let result = await indexmodule.getdata();
            // console.log(result1); 故意写错，来测试错误捕捉处理

            // ctx.body = await ctx.render('index', { content: result });
            ctx.body = 'index!!';
        };
    },
    testAction() {

        return async (ctx, next) => {

            ctx.body = await ctx.render('index/pages/test', { content: 'test' });
        };
    }
};
exports.default = indexController;