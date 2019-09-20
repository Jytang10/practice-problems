function numeric_toggles(num) {
  let result = num;
  for ( let i = 1; i < 9; i++) {
    if ( i % 2 !== 0) {
      console.log(result = result + (i+1));
    } else {
      console.log(result + i);
    }
  }
}

numeric_toggles(2);