

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(string, array) {
  let answerArray = [];
  let strLength = string.length;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > strLength) {
      answerArray.push(array[i])
    }
  }
  return answerArray;
}

console.log(biggerWords('whales', myArray));