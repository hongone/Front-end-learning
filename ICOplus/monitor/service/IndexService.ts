import { IIndex } from "../interface/IIndex";
import { Model } from "../model/User";
import TAGS from "../constant/tags";
import {provide} from "../ioc/ioc";

//绑定到TAGS的IndexService  ,设置为可注入
@provide(TAGS.IndexService)
export class IndexService  implements IIndex{
    private userStorage : Model.User[]=[
        {
            email: "11@qq.com",
            name : "river8"
        }
    ];
    public getUser(id:string):Model.User{
        let result : Model.User;
        result = this.userStorage[id];
        return result;

    }
}