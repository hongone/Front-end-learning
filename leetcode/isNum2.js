var isNumber = function(s){
  let str = s.trim().toLocaleLowerCase();
  if(str.length===0){
    return false;
  }
  return !isNaN(Number(s))

}


