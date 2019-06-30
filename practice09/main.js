

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];

function fittingWords( str, arr ) {
  for (var i = 0; i < str.length; i++) {
    arr = arr.filter(word => word.includes(str[i])); 
  }
  return arr;
}

console.log(fittingWords('cat', myArray));