

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
  var counter = {};
  var mode = [];
  var max = 0;
  for (var i in arr) {
      if (!(arr[i] in counter))
          counter[arr[i]] = 0;
      counter[arr[i]]++;

      if (counter[arr[i]] == max) 
          mode.push(arr[i]);
      else if (counter[arr[i]] > max) {
          max = counter[arr[i]];
          mode = [arr[i]];
      }
  }
  return mode[mode.length-1]; 
}
