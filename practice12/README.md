# math_sequence

Given the following function call:
- math_sequence(2);

And the resulting output:
- [4, 6, 8, 10, 12, 14, 16, 18, 20, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

Another sample:
- math_sequence(5);

Resulting output: 
- [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];

Create a function definition that achieves the output with the given input. 

<a href="https://jsbin.com/hirunic/edit?js,console" target="_blank">Solution Set</a>

*Notes*
- First output requires a condition after value is 20
  - First half is increment by 2, second half is increment by 0.5 (or 2/4)
- Second output is direct increment by 2

*Psuedocode*
- math_sequence with 1 parameter
- Create empty output array to store return values
- Use a for loop and set the parameter*2 as initial value
- If incrementor is greater than original parameter * 10
  - Increment and increase by 2 each time
  - Otherwise divide by 4 each time
- Return output array