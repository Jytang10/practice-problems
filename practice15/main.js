function numeric_toggles(N) {
  var test_array=[];
  var inner2 = null;
  for(var outer=N; outer<N+4; outer++)
  {
    for(var inner=outer; inner<outer+2; inner++){
      inner2 = ((outer%2?-1:1) *outer) * inner;
      test_array.push(inner2);
    }
  }
  return test_array;
}

console.log(numeric_toggles(2));