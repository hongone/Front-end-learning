'use strict';

var http = require('http');
var https = require('https');
var Koa = require('koa');
var render = require('koa-swig');
var path = require('path');

//const router = require('koa-simple-router');
var initController = require('./controller/initController');
var config = require('./config/');
var co = require('co');
var app = new Koa();

app.context.render = co.wrap(render({
  root: config.get('viewsdir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

// app.use(async ctx => {
//   ctx.body = 'Hello World!';
// });
//先做静态
//app.use(svstatic(__dirname +'/public',{ extensions: ['html','js']}));

initController.init(app, config);

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});

//http.createServer(app.callback()).listen(config.get('svport'));
//https.createServer(app.callback()).listen(9001);
//console.log(config.get('svhostname') + '服务已运行在端口' + config.get('svport'));


module.exports = app;