'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routesInit = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/', _indexController2.default.indexAction());
            _.get('/index.html', _indexController2.default.indexAction());
            _.get('/index/test', _indexController2.default.testAction());
        }));
    }
};
exports.default = routesInit;