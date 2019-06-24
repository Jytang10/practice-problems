## One to Multi

Build a function that sorts an array into a multidimensional array grouped by data type

- Write a function that takes one parameter 
	- Parameter 1 - An array of anything
- The function should output a multidimensional array grouped by data type
- Example: 
	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
	- `groupArray(myArray);`
	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

*Notes*
- use a conditional and typeof to check data type
- datatypes in example array: string, number, boolean
- loop through all values in param array

*Pseudocode*
- groupArray function will take in 1 parameter, an array of values with various datatypes
- Create 1 empty array that will be multidimensional and hold all datatype arrays and will be returned as output at the end of the function
- Create 3 empty arrays to store values for specific datatypes: strings, numbers, boolean
- Create 1 empty array to store values with datatypes that do not match the above 3 
- Iterate through each value in the given parameter array and check the datatype using a switch statement
- When checking each value in the array, if the value matches one of the 3 specified datatypes, add that value to the created datatype storage array
- If the value matches none of the 3 datatypes, add the value to the last created array for other cases of datatypes
- After iteration through all values in the parameter array is completed, add the 3 specific datatype storage arrays and the 1 extra datatype storage array to the 1 output multidimensional array
- Return the 1 output multidimensional array as output