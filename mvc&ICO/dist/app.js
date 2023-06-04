'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _awilix = require('awilix');

var _awilixKoa = require('awilix-koa');

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: _config2.default.logPath + '/error.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = _log4js2.default.getLogger('cheese');
const app = new _koa2.default();

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewsDir,
  autoescape: true,
  writeBody: false
}));

//注意：错误捕捉要放在前面，放在后面无法处理 
_errorHandler2.default.error(app, logger);
const container = (0, _awilix.createContainer)();
//每一次请求
app.use((0, _awilixKoa.scopePerRequest)(container));
//装载所有的Service到容器去。载入controllers
container.loadModules([__dirname + '/services/*.js'], {
  formatName: 'camelCase',
  resolverOption: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});
//载入controllers
app.use((0, _awilixKoa.loadControllers)(__dirname + '/routes/*.js'));

app.use((0, _koaStatic2.default)(_config2.default.staticDir));

app.listen(_config2.default.port, () => {
  console.log(`server is running on ${_config2.default.port}`);
});