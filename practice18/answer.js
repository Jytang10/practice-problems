

function average_array(inputArr, avgSize) {
  let output_array = inputArr;





  // Loops needed to find the first 2 x 2 values
  let current_avg = 0;
  let new_avg = null;
  for ( let index = 0; index < avgSize; index++) {
    for ( let index2 = 0; index2 < avgSize; index2++) {
      current_avg += output_array[index][index2];
    }
  }
  new_avg = current_avg / (avgSize*avgSize)
  // Correct new average value has been found here
  for ( let index = 0; index < avgSize; index++) {
    for ( let index2 = 0; index2 < avgSize; index2++) {
      output_array[index][index2] = new_avg;
    }
  }
  // New average values have replaced the old values in the original array here



  return output_array;
}

var input_array = 
[
	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
];

var average_size = 2;

average_array(input_array, average_size);
// console.log(average_array(input_array, average_size));