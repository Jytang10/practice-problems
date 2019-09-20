## array factors

Build a function that takes one array and finds all other elements of the array that are factors of its an element

- Write a function that takes one parameter
	- Parameter 1 - an array of numbers
- The function should return an object with multiple arrays in it, one for each non-repeating number in the input array
- repeated numbers should not be added twice
- Example:
	- `arrayFactors([4,2,8,6,3,9]);`
	- Output - {
		4: [2],
		2: [],
		8: [4,2],
		6: [2,3],
		3: [],
		9: [3]
	}

*Notes*
- Create empty object for answer
- Iterate through each element in the input array
- For each element (E1)
	- Create an object key-value pair for the element
	- Iterate again through all elements in the input array, skipping the currernt iterated element (E1)
		- Check if the remainder of E1 and the current element is equal to any other element in the number array
		- If equal, add to the array in that element's object value
- Return the answer object