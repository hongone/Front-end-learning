function clone (target, map = new WeakMap()){
  if ( typeof target === 'object' ) {
    const isArarry = Array.isArray(target);
    const cloneTarget = !isArarry ? {} : [];
    let maybeCur = map.get(target);
    if(maybeCur){
      return maybeCur
    }
    map.set(target,cloneTarget)
    // for...in 是遍历属性名， for...of是遍历属性值
    for(const key in target){
      cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget;
  }else{
    return target
  }
}

