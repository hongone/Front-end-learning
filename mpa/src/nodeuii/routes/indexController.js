import IndexModule from '../modules/IndexModule'
const indexController = {
    indexAction() {

        return async (ctx, next) => {
            let indexmodule = new IndexModule(ctx);
            let result = await indexmodule.getdata();

            ctx.body = await ctx.render('index', { content: result });
        };
    }
}
export default indexController;