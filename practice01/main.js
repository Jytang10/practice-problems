function biggerWord (myStr, myArray){
    var bigWordArray = [];
    for(i=0;i<myArray.length;i++){
        if(myArray[i].length > myStr.length){
            bigWordArray.push(myArray[i]);
        }
    }
    return bigWordArray;
}


var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
console.log(biggerWord('whales', myArray));