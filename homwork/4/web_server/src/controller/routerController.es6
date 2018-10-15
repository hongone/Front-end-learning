const router = require('koa-simple-router');
const Praise = require('../module/praise');
const md5=require("md5")
const routers ={
    index(){
        return async (ctx, next) => {
            ctx.body = await ctx.render('index',{title : "大拇指点赞"});
        }
    },
    post(){
        return async (ctx, next) => {

            ctx.body =  await (new Praise()).post();
        }

    },
    praise(){
        return async (ctx, next) => {
            if(ctx.request.headers['X-PJAX']){
                ctx.body =  '<article>  \
                                <div id="dl1">  \
                                    <x-praise></x-praise>   \
                                </div>  \
                            </article>';
            }else{
                ctx.body = await ctx.render('index',{title : "大拇指点赞"});
            }
        }

    },
    star(){
        return async (ctx, next) => {

            if(ctx.request.headers['X-PJAX']){
                ctx.body =  '<article>  \
                                <div id="dl1">  \
                                    <x-star></x-star>   \
                                </div>  \
                            </article>';
            }else{
                ctx.body = await ctx.render('star',{title : "星星点赞"});
            }
        }

    },
    adv(){
        return async (ctx, next) => {       
            let content = '<div style="width:100%;height:50px;background-color:yellowgreen">我的广告</div>';
            let encodestr=md5(content);
        //    ctx.body = content;
            ctx.set('encode-md5', encodestr);

            ctx.body = content;
            
            
        }

    }
}


module.exports = routers;