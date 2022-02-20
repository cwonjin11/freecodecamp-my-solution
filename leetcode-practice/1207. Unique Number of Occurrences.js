// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true


var uniqueOccurrences = function(arr) {
    
    let hash = {}
    
    for (const num of arr){
        if(hash[num]){
        hash[num]++
        } else {
            hash[num] = 1
        }
    }
    
    result = []
    for(const value in hash){
        result.push(hash[value])
    }
    return new Set(result).size === result.length 
    
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) // true

