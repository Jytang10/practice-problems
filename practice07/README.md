## Igpay Atinlay

Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

- Write a function that takes one parameter
	- Parameter 1 - A string
- The function should output your input string translated into Pig Latin
	- Example: 
		- `var myString = "Hello my name is Stu"`
		- `translate(myString);
		- Output - `"ellohay ymay amenay siay tusay"`

#### Making it better!

- There are several more rules to Pig Latin, try incorporating as many as you can into your function.
	- There are different rules for words that start with vowel sounds or silent letters for example.
	- <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an explanation of all the rules.
- Also try maintaining capitalization of words that are capitalized in your input string.
	- Example: 
		- `"Hello there"` would be `"Ellohay heretay"`

*Notes*
- Perform actions on each individual word
- Take and remove first letter from the word
- Add to the end of the same word (shift method, push method?)
- Add "ay" to the word
- Repeat for all words

*Pseudocode*
- Create empty answer array to store Pig Latin words
- Take given string parameter and find each individual word (using split method and split by spaces)
- Iterate through each word in the new array of words (use for loop)
- For each iteration
	- Slice the word, slicing between the first letter and the rest of the word (slice method)
	- Add letter to the end of the second remaining portion of the word (concat)
	- Add "ay" to the end of the word (concat)
	- Add the new Pig Latin word to the empty answer array (push method)
- After iteration is complete, concatenate all the words in the answer array together, adding a space between each word (join method)
- Return the new Pig Latin string as output