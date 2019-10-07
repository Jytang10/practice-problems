function sum(x,y){
  if(arguments.length > 1){
    return x + y;
  } else {
    return function sumInner(y){
      return x + y;
    }
  }
}

const sum = (x, y) => {
  if (y) {
    return x + y;
  }
  return z => x + z;
}




const sum = ( num1, num2, num3 ) => num1 + num2 + num3;

const func = partial(sum , 1);
const output = func(2,3);
console.log(output === 6) //===> true


const func2 = partial(sum);
const output = func(1,2,3);
console.log(output === 6) //===> true


const func3 = partial(sum , 1,2);
const output = func(3);
console.log(output === 6) //===> true


const partial = () => {};