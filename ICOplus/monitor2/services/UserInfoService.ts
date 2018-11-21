import {injectable, inject ,fluentProvide, provide, buildProviderModule} from '../ioc/ioc';
import {Model} from '../model/UserModel';
import {IUserInfo} from '../interface/IUserInfo';
import TAGS from '../constant/TAGS';

@provide(TAGS.UserInfoService)
class UserInfoService implements IUserInfo{
    private users : Array<Model.User> =[{
        name : 'Tom',
        email : '17@qq.com'
    },
    {
        name : 'Janney',
        email : '16@qq.com'
    }];
    getUser(id :number) : Model.User {
        return this.users[id];
    }

}

export {UserInfoService};