// Given a string s, return true if a permutation of the string could form a palindrome.

 

// Example 1:

// Input: s = "code"
// Output: false
// Example 2:

// Input: s = "aab"
// Output: true
// Example 3:

// Input: s = "carerac"
// Output: true


var canPermutePalindrome = function(s) {
    
    let hash = {}
    
    // maintain chars that occur odd number of times
    for(const char of s){
        if(hash[char]){
            delete hash[char]
           
        } else {
            hash[char] = 1
        }
    }
     console.log(hash)
    return Object.keys(hash).length <=1 ? true : false
};

// console.log(canPermutePalindrome("code")) // f
// console.log(canPermutePalindrome("aab")) // t
console.log(canPermutePalindrome("aabc")) // f
// console.log(canPermutePalindrome("carerac")) // t