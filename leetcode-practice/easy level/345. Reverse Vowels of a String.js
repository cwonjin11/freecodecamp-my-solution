// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

var reverseVowels = function(s) {
  
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    s = s.split('');

    let start = 0
    let end = s.length - 1

    while(start < end){
        if(vowels.includes(s[start]) && vowels.includes(s[end]) ){
            [s[start], s[end]] = [s[end], s[start]] 
            start++
            end--
        }else if(!vowels.includes(s[start])){
            start++;
        } else if(!vowels.includes(s[end])) {
            end--;
        }
        
    }
    return s.join("")


};

console.log(reverseVowels("hello")) // "holle"