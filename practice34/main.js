function longestCommonString(string1,string2) {
    var commonString = '';                                          //make empty strings to hold common string(s)
    var commonString2 = '';
    var stringSplit1 = string1.split('');                           //turn strings into arrays of the letters
    var stringSplit2 = string2.split('');

    for(str1Index=0;str1Index<string1.length;str1Index++){         //go through string1



        for(str2Index=0;str2Index<string2.length;str2Index++){      //compare each letter in string1 and go through string2

             if(stringSplit2[str2Index] === stringSplit1[str1Index]){      //if the string1 and string2 values match

                while(stringSplit2[str2Index] === stringSplit1[str1Index]){   //go through the two letter arrays in while loop, stop when the two compared letters (from each array) are not equal
                    commonString+=stringSplit2[str2Index];
                    str2Index++;
                    str1Index++;
                }

             } //else(stringSplit2[str2Index] !== stringSplit1[str1Index]){




            //}
        }



    }


    if(commonString.length > commonString2.length){
        return commonString;
    } else{
        return commonString2;
    }
}

console.log(longestCommonString('abcdefg','abc'));
console.log(longestCommonString('abdefghij','abefgh'));





// [a b d e f g h i j]
// [a b   e f g h]



