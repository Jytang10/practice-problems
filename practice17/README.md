# skippy_numbers

Given the following function call:
- skippy_numbers(2);

And the resulting output:
- [2,3,5,6,8,9,11,12];

Create a function definition that achieves the output with the given input. 

<a href="http://jsbin.com/vacogo/edit?html,js,output" target="_blank">Solution Set</a>


*Notes*
- Input argument is number 2
- Intervals
  - 1, 2, 1, 2, 1, 2, 1

*Pseudocode*
- Create an empty array to store answers
- Create a loop and iterate 8 times
  - Every other index
    - Add the value of the input number
    - Or add the value of the input number - 1
- Return the answer array as output