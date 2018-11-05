import IndexModule from '../modules/IndexModule'
const indexController ={
    async index(ctx,next){
        await next();
        let indexmodule =new IndexModule(ctx);
        ctx.body = await indexmodule.getdata();
        
    }
}
export default indexController;