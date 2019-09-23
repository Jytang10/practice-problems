

function skippy_numbers(num) {
  let arr = [];
  let count = 0;
  for ( let index = 0; index < 8; index++) {
    if (index % 2 !== 0) {
      count+= (num - 1);
      arr.push(count);
    } else {
      count+= num;
      arr.push(count);
    }
  }
  return arr;
}

console.log(skippy_numbers(2));