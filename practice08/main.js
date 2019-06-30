

function character_convert( str ) {
  var asciiStr = '';
  for (var i = 0; i < str.length; i++) {
    asciiStr += str.charCodeAt(i);
  }
  return asciiStr;
}

console.log(character_convert('the cat in the hat'));