// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let hash = {}
    
    for(let word of words){
        !hash[word] ? hash[word] = 1 : hash[word]++
    }
    
    let arr = []
    for(let key in hash){
        arr.push([key, hash[key]])
    }
 
    let result = []
    arr.sort((a,b) =>  {
        if(a[1] === b[1]){
            return a[0] > b[0] ? 1 : -1 /// sorting alphabetical order( arr.sort((a,b) => {a>b?1:-1}))
        }
        return b[1] - a[1];
    })
    console.log(arr)
   for(let i = 0; i < k; i++){
       result.push(arr[i][0])
   }
    return result
};
console.log(topKFrequent(["i","love","leetcode","i","love","coding"], k = 3)) //[ 'i', 'love', 'coding' ]