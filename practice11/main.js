
function evenOddSet( arr ) {
  var uniqueArr = [...(new Set(arr))];

  var outputObj = {
    odd: [],
    even: []
  }

  for (var i = 0; i < uniqueArr.length; i++) {
    if (typeof uniqueArr[i] === 'number') {
      if (uniqueArr[i] % 2 !== 0) {
        outputObj.odd.push(uniqueArr[i]);
      } else if (uniqueArr[i] % 2 === 0) {
        outputObj.even.push(uniqueArr[i]);
      }
    }
  }
  return outputObj;
}

console.log(evenOddSet([2,5,1,6,8,2,20,'cat',13,3]));



function evenOddFilter( arr ) {
  var arrayUnique = function (arr) {
    return arr.filter(function(item, index){
      return arr.indexOf(item) >= index;
    });
  };

  var uniqueArr = arrayUnique(arr);

  var outputObj = {
    odd: [],
    even: []
  }

  for (var i = 0; i < uniqueArr.length; i++) {
    if (typeof uniqueArr[i] === 'number') {
      if (uniqueArr[i] % 2 !== 0) {
        outputObj.odd.push(uniqueArr[i]);
      } else if (uniqueArr[i] % 2 === 0) {
        outputObj.even.push(uniqueArr[i]);
      }
    }
  }
  return outputObj;
}

console.log(evenOddFilter([2,5,1,6,8,2,20,'cat',13,3]));

function evenOddJeremy( arr ) {
  var outputObj = {
    odd: [],
    even: []
  }
  for(let v of arr){
    if(typeof v === 'number'){
      if (v % 2 === 0 && outputObj.even.indexOf(v) === -1){
        outputObj.even.push(v);
      } else if (v % 2 !== 0 && outputObj.odd.indexOf(v) === -1) {
        outputObj.odd.push(v);
      }
    }
  }
  return outputObj;
}

console.log(evenOddJeremy([2,5,1,6,8,2,20,'cat',13,3]));
