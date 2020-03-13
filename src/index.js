module.exports = function check(str, bracketsConfig) {

  bracketsConfig = bracketsConfig.map(item => item.join('')).join('  ');
  let bracketsChecker = [];

  for(let i = 0; i < str.length; i++){
    let indexInConfig = bracketsConfig.indexOf(str[i]);

    if(indexInConfig % 2 == 0){

      if(bracketsConfig[indexInConfig] == bracketsConfig[indexInConfig + 1] && bracketsChecker[bracketsChecker.length - 1] == str[i]){
        bracketsChecker.pop();
        continue;
      }else{
        bracketsChecker.push(str[i]);
      }
      continue;
    }

    if(bracketsChecker[bracketsChecker.length - 1] == bracketsConfig[indexInConfig - 1]){
      bracketsChecker.pop();
    }else{
      return false;
    }  
  }

  if(bracketsChecker.length != 0){
    return false;
  }
  return true;
}
