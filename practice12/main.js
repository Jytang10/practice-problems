

function math_sequence( num ) {
  returnArr = [];
  for (var i = num*2; i < num+38; i+=2) {
    if (i>num*10) {
      var o = i / 4;
    } else {
      o = i;
    }
    returnArr.push(o);
  }

  return returnArr;
}

console.log(math_sequence(2));
console.log(math_sequence(5));