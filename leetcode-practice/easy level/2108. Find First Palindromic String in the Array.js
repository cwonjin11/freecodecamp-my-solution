/**
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 

Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.

 */
// var firstPalindrome = function(words) {
//     let reversedArray = []

//     for(let i = 0; i < words.length; i++){
//         let reversed = words[i].split("").reverse().join("")
//         reversedArray.push(reversed)
//     }
    
//     for(let i = 0; i < reversedArray.length; i++){
//         if(reversedArray[i] === words[i])
//             return(words[i])
//     }
    
//     return ""
// };




var firstPalindrome = function(words) {
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word;
    }
    
    return '';
};

console.log(firstPalindrome(["notapalindrome","racecar"]))
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))
console.log(firstPalindrome(["def","ghi"]))