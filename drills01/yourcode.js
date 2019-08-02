
function sumArray( arr ){
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer;
}

function fitWithinVal(arr, num){
  var sumNum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (sumNum + arr[i] > sumNum) {
      return sumNum;
    }
    sumNum += arr[i];
  }
}

function getAllNamesShorterThan(arr, num){
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].length < num) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function makeLabel( info ){
  var shippingLabel = info.greeting + ' ' + info.givenName + ' ' + info.familyName + '\n' + info['home address']['streetNumber'] + ' ' + info['home address']['streetName'] + '\n' + info['home address']['city'] + ', ' + info['home address']['state'] + ' ' + info['home address']['zip'];
  return shippingLabel;
}
