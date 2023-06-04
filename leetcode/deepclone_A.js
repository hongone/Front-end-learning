//完整版
//可遍历数据类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Array]';
const argsTag = '[object Arguments]';

//不可遍历的类型
const stringTag = '[object String]';
const numberTag = '[object Number]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regExpTag = '[object RegExp]';

const deeptag=[mapTag,setTag,arrayTag,objectTag,argsTag];
const nodeeptag=[stringTag,numberTag,boolTag,dateTag,symbolTag,errorTag,regExpTag];
function isObject(target){
    const type = typeof target;
    return target !== null && target ==='object';
}
//获取基础数据的包裹对象的类型或其他对象的类型
function getType(target){
    return Object.prototype.toString.call(target);
}
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
function cloneOthertype(target, type){
    const Ctor = target.constructor;
    switch(type){
        case boolTag:
        case stringTag:
        case numberTag:
        case dateTag:
        case errorTag:
            return new Ctor(target);
        case regExpTag:
            return cloneReg(target);
        case symbolTag:                                        
            return cloneSymbol(target);
        default:
            return null;
    }
}
function cloneReg(target){
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;    
}
function cloneSymbol(targe) {
    // return Object(Symbol.prototype.valueOf.call(targe));
    return Symbol(Symbol.prototype.valueOf.call(targe).toString().replace(/^Symbol\(/,'').replace(/\)$/,''));
}
function clone(target, map = new WeakMap()){

    if(!isObject(target)){
        return target;    
    } 
    const type=getType(target);
    let cloneTarget;
    if(deepTag.inclues(type)) {
        cloneTarget = getInit(target, type)    
    }
    if(nodeeptag.inclues(type)) {
        return cloneOthertype(target, type);      
    }
      //防止循环引用
      if(map.get(target)){
          return map.get(target);      
      }
      //map的拷贝  map对象已经在getInit中创建
      if(type === mapTag){
         
          target.forEache((key,value) => {
               cloneTarget.set(key,clone(value,map));         
          })    
      }
      //set的拷贝，set对象已经在getInit中创建
      if(type === setTag){
          target.forEach(value => {
              cloneTarget.set(clone(value,map));          
          })   
      }
      //克隆简单对象和数组
      //用Array函数的判断是否数组
      const isArray = Array.isArray(target);
      
      for(let key in target){
          cloneTarget[key] = clone(target[key]);      
      }
      return cloneTarget;           
      
}



