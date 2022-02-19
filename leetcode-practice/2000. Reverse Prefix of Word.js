// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".


var reversePrefix = function(word, ch) {

    let output = ""
    let stopIndex = 0
    for(let i = 0; i < word.length; i++){
        if(word.includes(ch) && word[i] === ch){
            stopIndex = i
            break
        }
    }
   
    for(let i = stopIndex; i > -1; i--){
        output += word[i]
        console.log(word[i])
    }

   return output += word.substring(stopIndex + 1, word.length)
    
};

// console.log(reversePrefix("abcdefd", "d"))  //"dcbaefd"
// console.log(reversePrefix("xyxzxe", "z"))   //"zxyxxe"
console.log(reversePrefix("abcd", "z"))     //"abcd"