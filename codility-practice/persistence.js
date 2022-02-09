/* "Using the JavaScript language, have the function MultiplicativePersistence(num) 
take the num parameter being passed which will always be a positive integer and 
return its multiplicative persistence which is the number of times you must multiply 
the digits in num until you reach a single digit. For example: 
if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 
and finally 1 * 4 = 4 and you stop at 4. " */


function persistence(num) {

    if(num.toString().length > 1) {
        let mult = 1
        let splitNum = num.toString().split('') //=> ['3', '9']
            for(let i = 0; i<splitNum.length; i++) {
                mult *= parseInt(splitNum[i])
                console.log(parseInt(splitNum[i]))
                console.log(persistence(mult), "mult")
            }
            return 1 + persistence(mult)
    } else {
        return 0
    }
        
        
}

//     if(num.toString().length > 1){
//     var mult = 1;
//     var splitStr = num.toString().split('');
//      for(var i = 0; i<splitStr.length; i++) {
//        mult *= parseInt(splitStr[i]);
//      }
//        return 1 + persistence(mult);          
//    } else{
//      return 0; 
//    }


 console.log(persistence(39))
//  console.log(persistence(4))
//  console.log(persistence(25))
//  console.log(persistence( 999))
