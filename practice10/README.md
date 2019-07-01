# permutations

Given the following function call:
- permutations('abc');

And the resulting output:
- ["abc", "acb", "bac", "bca", "cab", "cba"];

Create a function definition that achieves the output with the given input. 

<a href="http://jsbin.com/xinoro/9/edit?html,js,output" target="_blank">Solution Set</a>

*Pseudocode*
- function getAllPermutations takes in 1 string param
  - Define results
  - If string is a simple character
    - Add character to results
    - Return results
  - For each char in string 
    - Define innerPermutations as a char of string
    - set innerPermutations to getAllPermutations (without next char)
    - for each string in innerPermutations
      - add defined char and innerPermutations char
  - return results
  
