function calculate(equation) {
  //Here is your solution
  let arr = equation.split(' ');
  let a = arr[0].length;
  let operator = arr[1];
  let b = arr[2].length

  if(operator === '+'){
    return '.'.repeat(a + b)
  }
  if(operator === '-'){
    return '.'.repeat(a - b)
  }
  if(operator === '*'){
    return '.'.repeat(a * b)
  }
  return '.'.repeat(a / b)
}
console.log(calculate("..... + ."))