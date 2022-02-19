// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


var arrayStringsAreEqual = function(word1, word2) {

// console.log(word1, word2)

    let word1Joined = word1.join("")
    let word2Joined = word2.join("")

    return word1Joined ===  word2Joined

    // console.log(word1Joined)
    // console.log(word2Joined)
};
console.log(arrayStringsAreEqual(["abc", "d", "defg"],["abcddefg"])) //true