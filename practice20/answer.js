var input_array = [5,3,2,5,1];

function randomize_array(arr){
  let shuffle_arr = [];
    for(var i = 0; i < 5; i++){
      shuffle_arr.push(arr.pop())
    }
  
  return shuffle_arr;
}

var output = randomize_array(input_array);
console.log(output);