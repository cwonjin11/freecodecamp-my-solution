// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]


var uncommonFromSentences = function(s1, s2) {
    
    let hash1 = {}
    
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    
    for(const word of s1){
        !hash1[word] ? hash1[word] = 1 : hash1[word]++
    }
    
    for(const word of s2){
        !hash1[word] ? hash1[word] = 1 : hash1[word]++
    }
    console.log(hash1)
    
    let result = []
    for(const [key,value] of Object.entries(hash1)){
        if(value == 1){
            result.push(key)
        }
    }
     return result
    
    
    
//     let words = s1.split(" ").concat(s2.split(" "));
//     let counts = {};
//     for(let i = 0; i < words.length; i++){
//         if(counts.hasOwnProperty(words[i]) === false)
//             counts[words[i]] = 0; 
//         counts[words[i]]++;
//     }
    
//     return words.filter(word => counts[word] === 1);
    
};
console.log(uncommonFromSentences(s1 = "this apple is sweet", s2 = "this apple is sour")) // ["sweet","sour"]