'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _routesInit = require('./routes/routesInit');

var _routesInit2 = _interopRequireDefault(_routesInit);

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
app.use((0, _koaStatic2.default)(_config2.default.staticDir));

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewsDir,
  autoescape: true,

  writeBody: false
}));

app.use(async ctx => ctx.body = await ctx.render('index'));
_routesInit2.default.init(app, _koaSimpleRouter2.default);
_errorHandler2.default.error(app, logger);
app.listen(_config2.default.port, () => {
  console.log(`server is running on ${_config2.default.port}`);
});