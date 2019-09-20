function arrayFactors(arr) {
  let answerObj = {};
  for (let i = 0; i < arr.length; i++) {
    answerObj[arr[i]] = [];
    let currentElement = arr[i];
    for (let j = 0; j < arr.length; j++) {
      let remainderElement = arr[j];
      if (arr[j] !== currentElement) {
        for ( let k = 0; k < arr.length; k++) {
          let validFactor = arr[k];
          if (currentElement / remainderElement === arr[k]) {
            answerObj[arr[i]].push(validFactor);
          }
        }
      }
    }
  }
  return answerObj;
}

console.log(arrayFactors([4,2,8,6,3,9]));