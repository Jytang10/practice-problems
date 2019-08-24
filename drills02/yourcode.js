

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

function getMinMaxMean(arr){
  const answer = {};
  answer.min = Math.min(...arr);
  answer.max = Math.max(...arr);
  answer.mean = arr.reduce((acc, val) => {return acc + val}) / arr.length;
  return answer;
}

function findMode(arr){


}
