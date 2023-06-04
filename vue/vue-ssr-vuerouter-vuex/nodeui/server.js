const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const backendApp = new Koa();
const frontendApp = new Koa();
const backendRouter = new Router();
const frontendRouter = new Router();
const clientManifest = require(path.resolve(__dirname, '../dist/client/vue-ssr-client-manifest.json'));
const serverBundle = require(path.resolve(__dirname, '../dist/server/vue-ssr-server-bundle.json'));
const template= fs.readFileSync(path.resolve(__dirname, '../dist/server/index.ssr.html'), 'utf-8');
// const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});


// 后端Server


backendRouter.get('*', (ctx, next) => {
  // console.log('ctx', ctx);
  // console.log('url', ctx.url);

  let context = {
    url: ctx.url
  };
  try {
    const ssrStream = renderer.renderToStream(context);
    ctx.status = 200;
    ctx.type = 'html';
    ctx.body = ssrStream;    
  } catch (error) {
    console.log(error)
  }

});
// 静态文件服务，但不返回主页文件内容
backendApp.use(static(path.resolve(__dirname, '../dist/client'),{index:false}));

backendApp
  .use(backendRouter.routes())
  .use(backendRouter.allowedMethods());

backendApp.listen(3001, () => {
  console.log('服务器端渲染地址： http://localhost:3001');
});
  
  
// // 前端Server
// frontendRouter.get('/index', (ctx, next) => {
//   let html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
//   ctx.type = 'html';
//   ctx.status = 200;
//   ctx.body = html;
// });
  
// frontendApp.use(serve(path.resolve(__dirname, '../dist')));

// frontendApp
//   .use(frontendRouter.routes())
//   .use(frontendRouter.allowedMethods());

// frontendApp.listen(3001, () => {
//   console.log('浏览器端渲染地址： http://localhost:3001');
// });