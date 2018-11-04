const errorHander ={
    error(app,logger){
        app.use(async(ctx,next)=>{
            await next();
            if(404 != ctx.status) return;
            logger.error("找不到了:" + ctx.path);
           // ctx.status = 404;
            ctx.body ='<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>'
        });
    }

}
export default errorHander;