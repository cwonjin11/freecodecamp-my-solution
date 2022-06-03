// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
//removing all non-alphanumeric characters, it reads the same forward and backward. 
//Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s) {

    //edge case
    if(s.length === 0) return true 

   const alphaNum = (char) => { 
       return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
    }
   const newS = s.toLowerCase().split("").filter( char => alphaNum(char)) 

   let left = 0
   let right = newS.length - 1
    console.log(newS)
   while(left < right){
       if(newS[left] !== newS[right]) {
           return false
        } else {
           left++
           right--
       }
   }
   return true

}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(""))



//regex version
    // with regex
    // let reverse = s.replace(/[^a-z0-9]/gi,"").split("").reverse().join('').toLowerCase()
    // let original = s.replace(/[^a-z0-9]/gi,"").split("").join('').toLowerCase()
    // return reverse === original