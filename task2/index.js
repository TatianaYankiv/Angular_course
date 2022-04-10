function grid(num) {
  const charCode = 'a'.charCodeAt();

  if(num < 0){
    return null;
  }

  const grid  = [];
  for(let row = 0; row < num; row++){
    const cells = [];
    for(let cell = 0; cell < num; cell++){
      cells.push(String.fromCharCode(charCode + (row + cell) % 26));
    }
    grid.push(cells.join(' '))
  }
  return grid.join('\n')
}

console.log(grid(3))