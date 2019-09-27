function sort_objects_by_name( testArr ){
  let swapped = true;
  do {
    swapped = false;
    for(let index = 0; index < testArr.length; index++) {
      let firstItemIndex = index;
      for(let innerIndex = firstItemIndex + 1; innerIndex < testArr.length; innerIndex++) {
        if(testArr[innerIndex]['name'] < testArr[firstItemIndex]['name']) {
          swapped = true;
          let storeItem = testArr[firstItemIndex]['name'];
          let itemToSwap = testArr[innerIndex]['name'];
          testArr[index]['name'] = itemToSwap;
          testArr[innerIndex]['name'] = storeItem;
        }
      }
    }
  } while (swapped === true)
  return testArr;
}

var input_array = 
[
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Michael',age:40, gender: 'M'},
	{name: 'Kendra',age:48, gender:'F'}
];

console.log(sort_objects_by_name( input_array ));