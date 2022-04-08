// Given an array of strings, remove each string that is an anagram of an earlier string, 
// then return the remaining array in sorted order.

// Example
// str = ['code', 'doce', 'ecod', 'framer', 'frame']

// code and doce are anagrams. Remove doce from the array and keep the first occurrence code in the array. 
// code and ecod are anagrams. Remove ecod from the array and keep the first occurrence code in the array. 
// code and framer are not anagrams. Keep both strings in the array. 
// framer and frame are not anagrams due to the extra r in framer. 
//Keep both strings in the array. Order the remaining strings in ascending order: ['code','frame','framer'].



// I used two for loops here which I know is not the most efficient 
// but this is what I came up with while working on the challenge. 
// One loop starts at the beginning and the other starts at the end. 
// The function will then create two variables here which will look at whichever index we are at.
// We will turn those words into arrays and sort them and turn them back into strings and compare them. 
//If they are the same we will get rid of the j indexed word and the function 
// will continue to loop until i and j meet in the middle. 
// At the end we will return the sorted array because the instructions tell us the array should be in alphabetical order.
function funWithAnagrams(array){
    for(let i = 0; i < array.length; i++){
    // for(let i = 0; i < array.length - 1; i++){
      for(let j = array.length-1; j > i; j--){
    //   for(let j = 1; j < array.length ; j++){
        let sortedA = array[i].split("").sort().join("")
        let sortedB = array[j].split("").sort().join("")
        if(sortedA === sortedB){
            array.splice(j,1)
        }
      }
    }
    return array.sort()
  }
  console.log(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']))

  //another way to solve funWithAnagrams

//   function funWithAnagrams(text) {
//     let result = [];
  
//     function checkForAnagram(word) {
//       return result.some(r => {
//         if (r.length !== word.length) {
//           return false
//         }
  
//         return word.split('').sort().toString() === r.split('').sort().toString();
//       })
//     }
  
//     for (let word of text) {
//       if (!result.includes(word) && !checkForAnagram(word)) {
//         result.push(word)
//       }
//     }
  
//     return result
//   }



// Find the first non-repeating character in it
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1


/* 
var firstUniqChar = function(s) {
    
    let map = {}
    
    for(const char of s){
        if(!map[char]){
            map[char] = 1
        } else {
            map[char]++
        }
    }
    
    // much faster than below code
    // for(const key in hash){
    //     if(hash[key] == 1){
    //         return s.indexOf(key)
    //     }
    // }

    //still works, readable
    for(let i = 0; i < s.length; i++){
        //   console.log(map[s[i]], "map[s[i]]")
        //   console.log(map)
        //   console.log(map["e"])
        if(map[s[i]] === 1) {
            return i
        }
    }
 return -1
};

console.log(firstUniqChar("leetcode"))
*/