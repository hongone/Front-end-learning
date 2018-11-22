import {TYPE, controller,interfaces,httpGet,inject,Router,provideController} from '../ioc/ioc';
import {Model} from '../model/UserModel';
import TAGS from '../constant/TAGS';


@controller('/user')  //这个才是路由
@provideController(TYPE.Controller,'IndexController')
class IndexController implements interfaces.Controller {
    private _userInfoService ;
    public constructor(
        @inject(TAGS.UserInfoService) userInfoService
    ) {
        this._userInfoService = userInfoService;
    }

    @httpGet('/:id')
    private async userAcion(ctx:Router.IRouterContext,next:()=>Promise<any>): Promise<any> {
        console.log(ctx.params);
        const result : Model.User =this._userInfoService.getUser(ctx.params.id);
        // ctx.body = await ctx.render("index",{data:result.email});
        ctx.body = {data:result.email};

    }
        
}
export default IndexController;


