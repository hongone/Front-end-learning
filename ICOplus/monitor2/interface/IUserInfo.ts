import {Model} from '../model/UserModel'
export interface IUserInfo{
    getUser(id : number) : Model.User;
}
