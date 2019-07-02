

function getAllPermutations(str) {
  var results = [];

  if (str.length === 1) {
    results.push(str);
    return results;
  }
  debugger;
  for (var i = 0; i < str.length; i++) {
    var firstChar = str[i];
    var charsLeft = str.substr(0,i) + str.substr(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

console.log(getAllPermutations('abc'));