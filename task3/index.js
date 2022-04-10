function isValidParentheses(str) {
  let arrOfbrackets = str.split('');
  let brackets = 0;
for( let i = 0; i < arrOfbrackets.length; i++){
  if(arrOfbrackets[i] === '('){
    brackets += 1;
  }
  if(arrOfbrackets[i] === ')'){
    brackets -= 1;
  }
  if(brackets < 0){
    return false
  }
}
  console.log(brackets)
  console.log(brackets)
  if(brackets == 0 ){
    return true
  }else{
    return false
  }
}
console.log(isValidParentheses(")("))