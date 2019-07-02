

var myArray = ['hello', 45, 'Bob', 'what', '23'];

function totalReverse(testArr) {
  let resultArray = [];
  for (var i = testArr.length - 1; i >= 0; i--) {
    resultArray.push(testArr[i]);
  }
  return resultArray;
}

console.log(totalReverse(myArray));