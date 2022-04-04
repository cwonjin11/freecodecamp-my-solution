// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false




const isPalindrome = (s, i, j) => {
 
    while(i < j){
       if(s[i] != s[j]){
           return false
       }
       i++
       j--
    }
    return true

}

// console.log(isPalindrome("aba"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("abca"))

var validPalindrome = function(s) {
    let i = 0
    let j = s.length -1
    while(i < j){
        if(s[i] != s[j]){
            return isPalindrome(s, i, j+1) || isPalindrome(s, i+1, j)
        }
        i++
        j--
    }    
    return true
}


console.log(validPalindrome("aba"))
console.log(validPalindrome("abba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abcba"))