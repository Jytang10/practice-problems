// function populateRecords(myArray){
//     var answerObject = {
//         charge: 0,
//         'cash advance': 0,
//     };
//
//     for(var i=0;i<myArray.length;i++){
//         var amountNumber = parseFloat(myArray[i].amount);
//         if(myArray[i].type === 'charge'){
//           answerObject.charge = amountNumber + answerObject.charge;
//         }else if(myArray[i].type === 'cash advance'){
//             answerObject['cash advance'] = amountNumber+answerObject['cash advance'];
//         }
//     }
// return answerObject;
// }



function populateRecords(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i].type)) {
            obj[arr[i].type] += parseFloat(arr[i].amount);
        } else {
            obj[arr[i].type] = parseFloat(arr[i].amount);
        }
    }

    return obj;
}


