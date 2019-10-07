function sum(x,y){
  if(arguments.length > 1){
    return x + y;
  } else {
    return function sumInner(y){
      return x + y;
    }
  }
}

const sum = (x, y) => {
  if (y) {
    return x + y;
  }
  return z => x + z;
}