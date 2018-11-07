import IndexModule from '../modules/IndexModule'
const indexController = {
    indexAction() {

        return async (ctx, next) => {
            let indexmodule = new IndexModule(ctx);
            let result = await indexmodule.getdata();
          // console.log(result1); 故意写错，来测试错误捕捉处理
    
            ctx.body = await ctx.render('index', { content: result });
        };
    }
}
export default indexController;