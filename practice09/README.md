## Fitting words

Build a function that takes in a string and an array of strings. The function should output an array of strings that contain the same letters as the single input string.

- Write a function that takes two parameters
	- Parameter 1 - A string
	- Parameter 2 - An array of strings
- The function should output all the words from the input array (parameter 2) that have the same letters as the first parameter.  IE 'cat' has 'c','a', and 't', and all words that have 'c','a', and 't' will be included.
- Example:
	- `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
	- `fittingWords('cat', myArray);`
	- Output - `['cat','caterpillar','accurate','cactus']`

*Notes*
- Create empty array for return output array
- Loop through and save all letters in Param 1
- Loop through all strings in Param 2, then compare with the saved letters
- If all saved letters are found, then add the string value to the answer array

*Pseudocode*
- Iterate through Param 1 string
	- For each unique letter in Param 1 string (each iteration), check if each string in Param 2 array includes the letter
	- If the string in Param 2 does not include the letter, remove the string from the array (filter and include methods)
- Return the new filtered Param 2 array