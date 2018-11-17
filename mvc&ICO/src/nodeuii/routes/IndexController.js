import { route, POST, GET } from 'awilix-koa'
// @route('/index.html')
@route('/')
class IndexController {
  constructor ({ indexService }) {
    // 注入indexService
    this.indexService = indexService
  }
  // @route('/index')  是访问 locahost:8000//index
  @route('index')
  @GET()
  async indexAction (ctx, next) {
    let result = await this.indexService.getdata()
    // console.log(result1); 故意写错，来测试错误捕捉处理

    // ctx.body = await ctx.render('index', { content: result });
    ctx.body = {result};
  }

  
  @route('test')
  @GET()
  @POST()
  async testAction (ctx, next) {
    ctx.body = await ctx.render('index/pages/test', { content: 'test' })
  }
}
export default IndexController
