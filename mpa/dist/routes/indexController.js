'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IndexModule = require('../modules/IndexModule');

var _IndexModule2 = _interopRequireDefault(_IndexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
    indexAction(ctx, next) {
        console.log(ctx);
        return async (ctx, next) => {
            let indexmodule = new _IndexModule2.default(ctx);
            let result = await indexmodule.getdata();
            console.log(result);
            ctx.body = result;
        };
    }
};
exports.default = indexController;