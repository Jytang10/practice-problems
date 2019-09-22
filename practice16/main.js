

function factor_of_sequence(factor) {
  let numArr = [];
  for ( let index = 0; index < 11; index++) {
    if ((index+factor) % 3 === 0) {
      numArr.push(index+factor)
    } else {
      numArr.push(0)
    }
  }
  return numArr;
}

console.log(factor_of_sequence(2));