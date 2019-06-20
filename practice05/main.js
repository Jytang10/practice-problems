arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// function fizzy(arr){
//     newArr = [];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%15===0){
//             newArr.push('FizzBuzz');
//         }else if(arr[i]%5===0){
//             newArr.push('Buzz')
//         }else if(arr[i]%3===0){
//             newArr.push('Fizz')
//         }else{
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(fizzy(arr));

    for(var i=0;i<arr.length;i++){
        if(arr[i]%15===0){
            console.log('FizzBuzz');
        }else if(arr[i]%5===0){
            console.log('Buzz');
        }else if(arr[i]%3===0){
            console.log('Fizz');
        }else{
            console.log(arr[i]);
        }
    }

