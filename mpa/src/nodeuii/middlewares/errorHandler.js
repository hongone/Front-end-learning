const errorHander ={
    error(app,logger){
        app.use(async(ctx,next)=>{
            try {
                await next();
            } catch (error) {
                logger.error("出严重错误了:" + error);
                ctx.status = error.status || 500;
                ctx.body = "网站挂掉了";

            }
                   
        });
        app.use(async(ctx,next)=>{
            await next();
            if(404 != ctx.status) return;
            logger.error("找不到了:" + ctx.path);
           // ctx.status = 404;
            ctx.body ='<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>'
        });
        
        // app.on('error', (err, ctx) => {
           
        //     logger.error("出严重错误了:" + err);
            
        //     console.error('server error', err, ctx)
        // });
    }

}
export default errorHander;