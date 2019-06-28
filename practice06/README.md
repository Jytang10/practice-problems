## Numeric Spirals

Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter. 

- Write a function that takes one parameter
	- Parameter 1 - A number
- The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
- Example:
	- `fibSequence(12);`
	- Output - `0 1 1 2 3 5 8 13 21 34 55 89`
- If you are unfamiliar with the Fibonacci sequence <a href="https://www.google.com" target="_blank">Click Here</a>

*Notes*
- Fibonacci sequence: next number found by adding up the two numbers before it
- Set given number param to the length of interation

*Pseudocode*
- Write formula for Fibonacci sequence
- After the first two numbers (0 and 1), each subsequent number is equal to the sum of the previous two numbers
- Based on the number value of the given param, iterate through the formula that many times
- For each iteration, list out the current value
- Stop iteration at the number of times equal to the given number param