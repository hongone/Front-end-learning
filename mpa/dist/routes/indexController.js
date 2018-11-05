'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _IndexModule = require('../modules/IndexModule');

var _IndexModule2 = _interopRequireDefault(_IndexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
    index(ctx, next) {

        return async (ctx, next) => {
            let indexmodule = new _IndexModule2.default(ctx);
            ctx.body = await indexmodule.getdata();
        };
    }
};
exports.default = indexController;