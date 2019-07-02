

function fibSequence( num ) {
  var numArr = [];
  var index = 0;
  debugger;
  for (var i = index; i < num; i++, index++) {
    if ( i > 1) {
      numArr.push(numArr[index-2] + numArr[index-1]);
    } else {
      numArr.push(i);
    }
  }
  return numArr;
}

console.log(fibSequence(12));