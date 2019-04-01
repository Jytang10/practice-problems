function random_range(start_num,end_num){
    if(typeof start_num === 'number'){
        var random_number = Math.floor((Math.random()*(end_num-start_num)+start_num));
        return random_number;
    }else if(Array.isArray(start_num) === true) {
        var ranIndex = Math.floor((Math.random() * start_num.length ));
        var randomArrayValue = start_num[ranIndex];
        return randomArrayValue;
    }else{
        console.log('Not an applicable answer')
    }

}

console.log(random_range(2,15));
console.log(random_range(1,100));
console.log(random_range(-100,100));
console.log(random_range(['a','b','c','d','e']));
console.log(random_range('hiya'));

