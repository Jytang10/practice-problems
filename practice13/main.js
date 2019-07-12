

function math_sequences(num1, num2) {
  result = [];
  let add = num1 + num2;
  let addStr = num1 + '+' + num2 + '=' + add;
  result.push(addStr);
  let sub = num1 - num2;
  let subStr = num1 + '-' + num2 + '=' + sub;
  result.push(subStr);
  let mult = num1 * num2;
  let multStr = num1 + '*' + num2 + '=' + mult;
  result.push(multStr);
  let div = num1 / num2;
  let divStr = num1 + '/' + num2 + '=' + div;
  result.push(divStr);
  return result;
}


console.log(math_sequences(2,5));
