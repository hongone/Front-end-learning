import IndexModule from '../modules/IndexModule'
const indexController ={
    index(ctx,next){
       
       return async(ctx,next)=>{
            let indexmodule =new IndexModule(ctx);
            ctx.body = await indexmodule.getdata();
        } 
    }
}
export default indexController;