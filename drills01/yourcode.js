function sumArray(numberArray){
    var total= 0;
	for(var i=0;i<numberArray.length;i++){
	    total += numberArray[i];
    }
	return total;
}


function fitWithinVal(arrayParam,numberParam){
    var totalValue= 0;
    var newArray = [];
    for(var i=0;i<arrayParam.length;i++){
        if(totalValue+arrayParam[i] < numberParam){
            totalValue += arrayParam[i];
            newArray.push(arrayParam[i]);
        }
    }
    return newArray;
}

function getAllNamesShorterThan(nameArray,numberPara){
    var newNameArray = [];
    for(var i=0;i<nameArray.length;i++){
        if(nameArray[i].length < numberPara){
            newNameArray.push(nameArray[i]);
        }
    }
    return newNameArray;
}

function makeLabel(objectParam){
return objectParam.greeting+ ' ' + objectParam.givenName + ' ' + objectParam.familyName + '\n' + objectParam['home address'].streetNumber + ' ' + objectParam['home address'].streetName + '\n' + objectParam['home address'].city + ', ' + objectParam['home address'].state + ' ' + objectParam['home address'].zip;
}