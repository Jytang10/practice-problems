

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray( testArr ) {
  let outputArr = [];
  let strArr = [];
  let booArr = [];
  let numArr = [];
  let otherArr = [];
  for ( var i = 0; i < testArr.length; i++) {
    switch(typeof testArr[i]) {
      case 'string':
        strArr.push(testArr[i]);
        break;
      case 'boolean':
        booArr.push(testArr[i]);
        break;
      case 'number':
        numArr.push(testArr[i]);
        break;
      default:
        otherArr.push(testArr[i]);
        break;      
    }
  }
  if (otherArr.length > 0) {
    outputArr.push(strArr, booArr, numArr, otherArr);
    return outputArr;
  }
  outputArr.push(strArr, booArr, numArr);
  return outputArr;
}

console.log(groupArray(myArray));