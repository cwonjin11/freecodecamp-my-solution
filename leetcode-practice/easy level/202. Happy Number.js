

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function(n) {

    let set = new Set()
    
    while(!set.has(n)){
        set.add(n)
        console.log(set)
        let arr = n.toString()
        let sum = 0
        for( let i = 0; i < arr.length; i++){
            sum += Math.pow(arr[i], 2)
        }
        if(sum === 1){
            return true
        } else {
            n = sum
        }
    }
   
    return false

};


console.log(isHappy(19)) //true
// console.log(isHappy(2))  //false



// var isHappy = function(n) {
//     let set = new Set();
//     while(!set.has(n)) {
//         set.add(n);
//         let arr = n.toString();
//         let squarsSum = 0;
//         for (let i = 0; i < arr.length; i++){
//             squarsSum += Math.pow(+arr[i],2)
//         }
//         if (squarsSum === 1) return true;
//         n = squarsSum;
//     }
//     return false;
// };