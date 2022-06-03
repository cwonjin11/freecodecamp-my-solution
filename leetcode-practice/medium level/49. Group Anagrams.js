// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]



var groupAnagrams = function(strs) {
    let hash = {}
    for(let str of strs){
         let key = [...str].sort().join("")  /// this is the main point!!! sorting string!!
         //let key = str.split("").sort().join("")
        if(!hash[key]){
            hash[key] = []  // set value as an empty arry
        }
        hash[key].push(str) // and push str to the relevant array
    }
     
    // let output = []
    // for(const key in hash){
    //     output.push(hash[key])
    // }
    //  return output
    // or just simply Object.values(hash) => it returns array
     return Object.values(hash)
     
 };

 console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // => [["bat"],["nat","tan"],["ate","eat","tea"]]
