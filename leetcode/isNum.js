var isNumber = function(s){
  let str = s.trim().toLocaleLowerCase();
  if(str.length===0){

    return false;
  }


  switch(str){
    case '.': return false;
    case '+.': return false;
    case '-.': return false;
    case 'e.': return false;
  }
  let lastLetter = str[str.length-1];

  switch(lastLetter){
      case '+': return false;
      case '-': return false;
      case 'e': return false;
  }
  if(str[0] === 'e'){
    return false;
  }
  let initLetters = str.substr(0,2);
  switch(initLetters){
      case '.e': return false;
      case '+e': return false;
      case '-e': return false;
  }

  if(str.indexOf('++') >-1) {
    return false;
  } 
  if(str.indexOf('+-') >-1) {
    return false;
  }
  if(str.indexOf('+-') >-1) {
    return false;
  }
  if(str.indexOf('--') >-1) {
    return false;
  } 
  if(str.indexOf('-+') >-1) {
    return false;
  }
  if(str.indexOf('.-') >-1) {
    return false;
  } 
  if(str.indexOf('.+') >-1) {
    return false;
  }
  if(str.indexOf('+') > 0 && str.indexOf('e') === -1) {
    return false;
  } 
  if(str.indexOf('-') > 0 && str.indexOf('e') === -1) {
    return false;
  }
	const pa = '.-+0123456789e';
	let plusCount = 0;
	let minusCount = 0;
	let ECount = 0;
	let dotCount = 0;
	for(let i=0; i<str.length;i++){
		if(pa.indexOf(str[i]) === -1) {
			return false;
		}
    switch(str[i]){
      case '+': 
        plusCount++;
        break;
      case '-': 
        minusCount++;
        break;
      case 'e': 
        ECount++;
        break;
      case '.': 
        dotCount++;
        break;
    }
    
    if(plusCount >2){
      return false;
    }

    if(minusCount >2){
      return false;
    }
    if(plusCount + minusCount >2){
      return false;
    }
    if(ECount > 1){
      return false;
    }
    if(dotCount > 1){
      return false;
    }

  }
  if(plusCount===0 && minusCount===0 && ECount===0 && dotCount===0){
    return true;
  }
  
  let strArr = str.split('e');
  // console.log(strArr)
  if(ECount>0){
  
    if(strArr[1].indexOf('+') > 0) {
      return false;
    }
    
    if(strArr[0].indexOf('+') > 0) {
      return false;
    }
    if(strArr[1].indexOf('-') > 0) {
      return false;
    }
    if(strArr[0].indexOf('-') > 0) {
      return false;
    }    
    if(strArr[1].indexOf('.') > -1) {
      return false;
    }    
  }
  strArr = str.split('.');
  if(dotCount>0  && ECount === 0){
    if(strArr[0].indexOf('+') > 0) {
      return false;
    }
    if(strArr[0].indexOf('-') > 0) {
      return false;
    }
    if(strArr[1].indexOf('+') > -1) {
      return false;
    }
    if(strArr[1].indexOf('-') > -1) {
      return false;
    }
  }
  if(plusCount > 1 && ECount === 0) {
    return false;
  }
  if(minusCount > 1 && ECount === 0) {
    return false; 
  }
  
  if(plusCount + minusCount > 1 && ECount === 0) {
    return false;
  }
  return true;

}


