

function getPath(str){
  return str.split('/');
}

function getPathParts(str){
  let answerObj = {
    protocol: null,
    host: null,
    port: null,
    path: null,
    file: null,
  }
  let firstSplit = str.split(':');
  let hostSplit = firstSplit[1].split('//');
  let thirdSplit = firstSplit[2].split('/');
  answerObj.protocol = firstSplit[0];
  answerObj.host = hostSplit[1];
  answerObj.port = parseInt(thirdSplit[0]);
  if (thirdSplit.length > 3) {
    answerObj.path = thirdSplit[1] + '/' + thirdSplit[2];
    answerObj.file = thirdSplit[3];
  } else {
    answerObj.path = thirdSplit[1];
    answerObj.file = thirdSplit[2];
  }
  return answerObj;
}

function getCapitalCount(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toUpperCase() === arr[i][0]) {
      count++
    }
  }
  return count;
}

function correctCalcChecker(arr){
  let answerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i].num1;
    let num2 = arr[i].num2;
    let op = arr[i].op;
    let result = arr[i].result;
    let testResult;
    switch(op) {
      case '+':
      testResult = num1 + num2
      break;
      case '-':
      testResult = num1 - num2
      break;
      case '/':
      testResult = num1 / num2
      break;
      case '*':
      testResult = num1 * num2
      break;
    }
    if (result === testResult) {
      answerArr.push(arr[i])
    }
  }
  return answerArr;
}

function doMath(){

}
