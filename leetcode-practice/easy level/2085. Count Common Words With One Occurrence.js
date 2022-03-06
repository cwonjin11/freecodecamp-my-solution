// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0
// Explanation: There are no strings that appear in each of the two arrays.
// Example 3:

// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1
// Explanation: The only string that appears exactly once in each of the two arrays is "ab".


var countWords = function(words1, words2) {
    
    let hash1 = {}
    let hash2 = {}

    
    for(const word of words1){
        !hash1[word] ? hash1[word] = 1 : hash1[word]++
    }
    
    for(const word of words2){
        !hash2[word] ? hash2[word] = 1 : hash2[word]++
    }

    let count = 0
     for (const word of words1) {
        if (hash1[word] === 1 && hash2[word] === 1) count++;
    }

   return count
};

console.log(countWords(words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"])) // 2 => leetcode, amazing

