import { route, POST, GET } from 'awilix-koa'

// @route('/data')
@route('/customer')
class AataController {
  constructor ({ dataService }) {
    // 注入indexService
    this.dataService = dataService
  }
  
  @route('/')
  @GET()
  async list (ctx, next) {
    const result = 'costomer1,costomer2'
    console.log(result)
    ctx.body = result;
  }

  @route('/:id')
  @GET()
  async one (ctx, next) {
    const result = 'costomer1'
    console.log(result)
    ctx.body = result;
  }

}
export default AataController
