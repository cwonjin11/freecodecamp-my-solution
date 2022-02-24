// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0


var strStr = function(haystack, needle) {

    let output = -1
    
    if(needle.length === 0) return 0
   
     for(let i = 0; i < haystack.length; i++){
         let subStr = haystack.slice(i, i + needle.length)
         console.log(subStr, i)
         if(subStr === needle){
            return i
         }
     }
     return output
 };
 console.log(strStr("hello", "ll"))

 