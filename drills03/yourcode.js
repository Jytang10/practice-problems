

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
  console.log(thirdSplit);
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

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
