

function countOccurences(wordArray, wordCorrect){
    var wordCount = 0;
    for(var i=0;i<wordArray.length;i++){
        if(wordArray[i] === wordCorrect){
            wordCount++;
        }
    }
    return wordCount;
}

function wordLengths(testWords){
    var wordLengthArray = [];
    for(var i=0;i<testWords.length;i++){
        wordLengthArray.push(testWords[i].length);
    }
    return wordLengthArray;
}

function getMinMaxMean(numArray){
    var newObject = {};
    var newMin = Math.min.apply(null,numArray);
    var newMax = Math.max.apply(null,numArray);

    var total = 0;
    for(var i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    var newMean = total / numArray.length;

    newObject['min'] = newMin;
    newObject['max'] = newMax;
    newObject['mean'] = newMean;
    return newObject;
}

function findMode(modeArray){

    if (!modeArray.length) return [];
    var modeMap = {},
        maxCount = 0,
        modes = [];

    modeArray.forEach(function(val) {
        if (!modeMap[val]) modeMap[val] = 1;
        else modeMap[val]++;

        if (modeMap[val] > maxCount) {
            modes = [val];
            maxCount = modeMap[val];
        }
        else if (modeMap[val] === maxCount) {
            modes.push(val);
            maxCount = modeMap[val];
        }
    });

    if(modes.length > 1){
        return modes[1];
    } else if(modes.length === 1){
        return modes[0];
    };

}
