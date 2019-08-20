

function countOccurences(arr, word){
  let count = 0;
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  return count;
}

function wordLengths(arr){
  let answerArr = [];
  for(var i = 0; i < arr.length; i++) {
    answerArr.push(arr[i].length);
  }
  return answerArr;
}

function getMinMaxMean(){

}

function findMode(){

}
