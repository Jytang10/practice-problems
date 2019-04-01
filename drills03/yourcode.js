

function getPath(pathParam){
    var splitString = pathParam.split('/');
    return splitString;
}

function getPathParts(pathParam){
    var linkObject = {};
    var splitStringBySlash = pathParam.split('/');
    console.log(splitStringBySlash);  //Comment this out later
    var splitStringByColon = pathParam.split(':');
    console.log(splitStringByColon);  //Comment this out later


    linkObject['protocol'] = splitStringByColon[0];  //DONE

     var hostLastIndex = splitStringBySlash[2].lastIndexOf(':');
     var hostSlice = splitStringBySlash[2].slice(0,hostLastIndex);
     linkObject['host'] = hostSlice; //DONE

     var portIndex = splitStringByColon[2].indexOf('/');
     var portSlice = splitStringByColon[2].slice(0,portIndex);
     linkObject['port'] = portSlice; //DONE


     linkObject['path'] = splitStringByColon[2];
     linkObject['file'] = splitStringBySlash[5];
     return linkObject;
}

// http://learningfuze.com:80/part-time/details/index.html
// https://google.com:443/account/content.asp

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
