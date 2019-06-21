## Total Reverse 

Build a function that takes in an array and reverses it

- Write a function that takes one parameter
	- Parameter 1 - An array of anything
- The function should output an array that is in reverse order from the input array
- Example: 
	- `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
	- `arrayReverse(myArray);`
	- Output - `['23', 'what', 'Bob', 45, 'hello']`
- Avoid using pre-built functions that do something similar

*Pseudocode*
- totalReverse function will take in 1 parameter (an array)
- Create an empty array (resultArray) to store values
- Iterate backwards through each value in the parameter array, starting from the last value of the array
- For each iteration, add the value in the parameter array to the resultArray
- Return the resultArray as the output