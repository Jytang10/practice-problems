## Bigger words

Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

- Write a function that takes two parameters
	- Parameter 1 - A string
	- Parameter 2 - An array of strings
- The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
- Example:
	- `var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];`
	- `biggerWords('whales', myArray);`
	- Output - `['reptile', 'mammoth', 'turtles']`

	Notes
	- Find length of the string param
	- Check the length of the words in myArray param
	- Compare both lengths
	- In the case of finding a longer word in the array, display all valid words

	Pseudocode
	- Create an empty answer array to store valid words 
	- Find and store the length value of string param
	- Iterate through each word in the array and check the length of the word
	- Compare the checked word's length to the length of the string param
	- If the length of the checked word is longer than the length of the string param, add that word to the answer array
	- Return the answer array as output