

var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort(testArr) {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < testArr.length; i++) {
      let firstItemIndex = i;
      for (let j = firstItemIndex + 1; j < testArr.length; j++) {
        if (testArr[j] < testArr[firstItemIndex]) {
          swapped = true;
          let storeFollowingVal = testArr[j];
          let storeCurrentVal = testArr[firstItemIndex];
          testArr[j] = storeCurrentVal;
          testArr[i] = storeFollowingVal;
        }
      }
    }
  } while (swapped === true);
  return testArr;
}

console.log(sort(myArray));