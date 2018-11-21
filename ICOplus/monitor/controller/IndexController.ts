import { provideController,Router,controller,interfaces ,inject,httpGet ,TYPE} from "../ioc/ioc";
import TAGS from "../constant/tags";
import { Model } from "../model/User";


@controller('/')
@provideController(TYPE.Controller,"IndexController")
export default class IndexController implements interfaces.Controller {
    //需要继承interfaces.Controller才能用
    private indexService
    constructor(@inject(TAGS.IndexService) indexService){
        this.indexService = indexService;
    }

    @httpGet('/')
    private  async index(ctx:Router.IRouterContext,next:()=>Promise<any>) : Promise<any> {
        const result : Model.User =this.indexService.getUser(1);
        ctx.body = await ctx.render("index",{data:result.email});

    }

}