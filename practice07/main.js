

var myString = "Hello my name is Stu";

function translate( str ) {
  var returnArr = [];
  var splitStr = str.split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    let firstLetter = splitStr[i].slice(0, 1);
    let remainingLetters = splitStr[i].slice(1,splitStr[i].length)
    let addFirstLetterAndAy = remainingLetters + firstLetter + 'ay';
    returnArr.push(addFirstLetterAndAy);
  }
  return returnArr.join(' ');
}

console.log(translate(myString));