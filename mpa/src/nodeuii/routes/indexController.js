import IndexModule from '../modules/IndexModule'
const indexController ={
    indexAction(ctx,next){
       console.log(ctx);
       return async(ctx,next)=>{
            let indexmodule =new IndexModule(ctx);
            let result = await indexmodule.getdata();
            console.log(result);
            ctx.body = result;
        }; 
    }
}
export default indexController;