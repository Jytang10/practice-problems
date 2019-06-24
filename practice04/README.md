## Sort

Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order. 

- Write a function that takes one parameter
	- Parameter 1 - An Array of strings
- The function should output an array containing all the strings from the input array but in alphabetical order
- Example:
	-`var myArray = ['mouse', 'cat', 'dog', 'human'];`
	- `sort(myArray);`
	- Output - `['cat', 'dog', 'human', 'mouse']`
- Try doing this using a **Bubble Sort**, if you are unsure what that is <a href="https://www.google.com" target="_blank">Click Here</a>

*Notes*
- Create output array
- Loop through given parameter array
- Value of first char
- sort method 

*Simple Method Solution*
- Use and return the sort method on the given sample array
- Does not cover all cases

*Pseudocode for Bubble Sort*
- Function takes in 1 param array
- Define swapped variable
- Use a do while loop to iterate through the param array at least once
- While the swapped variable is true, continue iteration
- During iteration, first set swapped to false
- Iterate twice (2 nested for loops) through the param array
- Set swapped variable to false
- Compare the first letters between two strings at a time
- If the letters are equivalent, check the next letter in the strings
- If the following string's letter value is greater than the original string's letter, swap the strings
- When swapping occurs, set swapped to true
- Repeat the iteration until the swapped variable is false
- Return the original, now sorted array as output