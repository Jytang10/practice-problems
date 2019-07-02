Given the following function call:
- character_convert('the cat in the hat');

And the resulting output:
- "11610410132999711632105110321161041013210497116";

Create a function definition that achieves the output with the given input. 

- <a href="https://www.google.com/search?q=ascii&oq=ascii&aqs=chrome..69i57j69i60j69i59j69i60j0l2.1319j1j9&sourceid=chrome&es_sm=91&ie=UTF-8" target="_blank">hint</a>
- Optimization: How would you speed up the processing if you already encountered a value?

<a href="" target="_blank">Solution Set</a>

*Notes*
- List of each letter's ASCII value
- Loop through whole string and output ASCII value

*Psuedocode*
- Create an empty string to hold final return output
- Iternate through each value in the string input
- Find the ASCII value of the given value
- Add the ASCII value to the return output
- Once iteration is complete, return the return output string