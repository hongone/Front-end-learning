'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routeInit = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/', (ctx, next) => {
                _indexController2.default.index(ctx, next);
            });
            _.post('/name/:id', (ctx, next) => {
                // ...
            });
        }));
    }
};
exports.default = routeInit;