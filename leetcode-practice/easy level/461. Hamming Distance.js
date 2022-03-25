// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1



var hammingDistance = function(x, y) {
    x = x.toString(2).split("")
    y = y.toString(2).split("")
     
    let max = Math.max(x.length, y.length)
    let count = 0

    while(x.length < max){
            x.unshift("0")
    }

    while(y.length < max){
        y.unshift("0")
    }
     
    for(let i = 0; i < max; i++){
         if(x[i] !== y[i]){
             count++
         }
    }
     return count
 };



 console.log(hammingDistance(1,4)) //2
 console.log(hammingDistance(3,1)) //1
 
