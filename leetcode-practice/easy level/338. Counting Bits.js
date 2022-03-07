// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

var countBits = function(n) {
    
    let hash = {}
    for(let i = 0; i <=n; i++){
        if(!hash[i]){
             hash[i] = i.toString(2).split("").map(Number)   
        }
    }
    
    
    let output = []
    for(const [key, value] of Object.entries(hash)){
        let sum = value.reduce( (acc,curr)  => acc + curr)
        output.push(sum)
    }
    return output
    
};

console.log(countBits(2)) //[0,1,1]
console.log(countBits(5)) //[0,1,1,2,1,2]
console.log(countBits(500)) 