function groupArray(sortArray){
    var numArray = [];
    var strArray = [];
    var booArray = [];
    var finalArray = [];

    for(i=0;i<sortArray.length;i++){
        switch(typeof sortArray[i]){
            case ( 'number'):
                numArray.push(sortArray[i]);
                break;
            case ('string'):
                strArray.push(sortArray[i]);
                break;
            case ('boolean'):
                booArray.push(sortArray[i]);
                break;
            default:
                console.log('There are non-applicable values');
                break;
        }
    }
    finalArray.push(numArray,strArray,booArray);
    return finalArray;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
console.log(groupArray(myArray));