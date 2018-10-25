//模拟引用公共代码
import help from "../common/index.js";
console.log(help.version);
const asyncbanner ={
    init(){
        console.log('banner');
    }
}
export default asyncbanner;