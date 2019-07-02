## Even Odds

Build a function that takes one array and then sorts it into odd and even numbers 

- Write a function that takes one parameter
	- Parameter 1 - an array of anything
- The function should return an object with 2 arrays in it:
	- odd: an array of all the odd numbers in the array
	- even: an array of all the even numbers in the array
- all non-number entities should be ignored
- repeated numbers should not be added twice
- Example:
	- `evenodd([2,5,1,6,8,2,20,'cat',13,3]);`
	- Output - {
		odd: [5, 1, 13, 3],
		even: [2, 6, 8, 20]
	}

	*Notes*
	- Loop and modulo
	- Check datatype

	*Pseudocode*
	- evenOdd function takes in 1 array parameter
	- Create return output object with 2 empty arrays, each for storing return output even and odd values
	- Remove duplicate values and create a new array with only unique values
	- Iterate through each value in the input array
	- First check the data type of the value
		- If a number, use modulo and check if there is a remainder
			- If there is a remainder, add the value to the odd output array within the return object (push method)
			- If there is no remainder, add the value to the even output array within the return object (push method)
	- After iteration is complete, return the return object 