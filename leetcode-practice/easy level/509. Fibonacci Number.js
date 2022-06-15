// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//using hash
var fib = function(n) {

    let hash = {}
    for(let i = 0; i <= n; i++){
        if(i < 2){
            hash[i] = i
        } else {
            hash[i] = hash[i-2] + hash[i-1]
        }
    }
       console.log(hash)
       return hash[n]
};


//regular solution
var fib = function(n) {
    let firstTwo = [0, 1]
    if( n < 2 ){
        return n
    }
    for(let i = 0; i < n-1; i++){
        let sum = firstTwo[0] + firstTwo[1]
        firstTwo = [firstTwo[1], sum]
    }
    return firstTwo[1]
};

console.log(fib(9)) //34
 //  0. 1  2. 3. 4. 5. 6. 7.  8.  9
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ... <==fib number