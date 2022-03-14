//  Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

//  Example 1:
 
//  Input: num = 38
//  Output: 2
//  Explanation: The process is
//  38 --> 3 + 8 --> 11
//  11 --> 1 + 1 --> 2 
//  Since 2 has only one digit, return it.
//  Example 2:
 
//  Input: num = 0
//  Output: 0



// make it DRY
//  const addDigits = (num) => {

//     if(num < 10) return num


//     num = num.toString().split("")
//     let sum = num.reduce((acc, curr) => Number(acc) + Number(curr), 0)
   
//     for(let i = 0; i < num.length; i++){
//         if(sum >= 10) {
//             num = sum.toString().split("")
//             sum = num.reduce((acc, curr) => Number(acc) + Number(curr), 0)
//             }  
//         if(sum < 10){
//             return sum
//         }
//     }
// };


console.log(addDigits(38)) // 2
console.log(addDigits(199)) // 1


var addDigits = function(num) {
    if(num < 10) return num
    
    num = num.toString().split("")
    let sum = num.reduce((acc, curr) => Number(acc) + Number(curr), 0)
    
    while(sum > 9){
        num = sum.toString().split("")
        sum = num.reduce((acc, curr) => Number(acc) + Number(curr), 0)
     }  
        return sum
};