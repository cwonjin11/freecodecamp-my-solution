// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let hash = {}

    for(const letter of s){
        if(!hash[letter]){
            hash[letter] = 1
        } else {
            hash[letter]++
        }
    }
   
    for(const char of t){

        if(!hash[char]){
            return false
        } else {
            hash[char]--
        }
        // if(hash[char] > 0){
        //     hash[char]--
        // } else {
        //     return false
        // }
    }

    return true

};

// console.log(isAnagram("anagram", "nagaram")) //t
console.log(isAnagram("rat", "cat")) //f
// console.log(isAnagram("ab", "a")) //f