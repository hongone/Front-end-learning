const http = require('http');
const https = require('https');
const Koa = require('koa');
const render = require('koa-swig');
const path = require('path');
const svstatic = require('koa-static');
//const router = require('koa-simple-router');
const routers = require('./controller/');
var co = require('co');
const app = new Koa();

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
 // locals: locals,
//  filters: filters,
 // tags: tags,
 // extensions: extensions,
  writeBody: false
}));

// app.use(async ctx => {
//   ctx.body = 'Hello World!';
// });
//先做静态
//app.use(svstatic(__dirname +'/public',{ extensions: ['html','js']}));
app.use(svstatic(__dirname +'/public'));
app.use(routers);
// app.use(router(_ => {
//   _.get('/index/index', async (ctx, next) => {
//       ctx.body = await ctx.render('index');
//   })
//   _.get('/index/praise', async (ctx, next) => {
//      ctx.body = await ctx.render('index');
//   })
// }));
//app.use(async ctx => ctx.body = await ctx.render('index'));
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

http.createServer(app.callback()).listen(9000);
//https.createServer(app.callback()).listen(9001);
console.log('服务已运行在端口' + 9000);
