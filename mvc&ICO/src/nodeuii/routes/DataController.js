import { route, POST, GET } from 'awilix-koa'
// @route('/index.html')
@route('/data')
class DataController {
  constructor ({ dataService }) {
    // 注入indexService
    this.dataService = dataService
  }
  // @route('/index')  是访问 locahost:8000//index
  @route('/index')
  @GET()
  async indexAction (ctx, next) {
    let result = await this.dataService.getdata()
    // console.log(result1); 故意写错，来测试错误捕捉处理

    // ctx.body = await ctx.render('index', { content: result });
    ctx.body = {result};
  }

}
export default DataController
