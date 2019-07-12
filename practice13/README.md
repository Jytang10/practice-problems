# math computation sequences

Given the following function call:
- math_sequences(2,5);

And the resulting output:
- ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];

Create a function definition that achieves the output with the given input. 

<a href="http://jsbin.com/zebete/edit?html,js,console" target="_blank">Solution Set</a>

*Notes*
- 4 outputs per each pair of params
- Add, subtract, multiply, divide the params
- Create 4 strings, each that does the math

*Pseudocode*
- Create array to store results
- Find the result of adding both params
- Add the above result to a string (representing addition)
- Performt he same two steps for subtraction, multiplication, division
- Add all 4 results to result array
- Return result array as output