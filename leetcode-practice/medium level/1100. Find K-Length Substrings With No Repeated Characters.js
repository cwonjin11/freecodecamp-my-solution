// Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.

// Example 1:

// Input: s = "havefunonleetcode", k = 5
// Output: 6
// Explanation: There are 6 substrings they are: 'havef','avefu','vefun','efuno','etcod','tcode'.
// Example 2:

// Input: s = "home", k = 5
// Output: 0
// Explanation: Notice k can be larger than the length of s. In this case, it is not possible to find any substring.


var numKLenSubstrNoRepeats = function(s, k) {
    
    let output = 0
   
    for(let i = 0; i < s.length; i++){
        let subStr = new Set(s.slice(i, i+k))
        if(subStr.size === k ){
          output++
        }
    }
 return output


};
console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5)) //6
console.log(numKLenSubstrNoRepeats("home", 5)) //0



// find subStr elements
// var numKLenSubstrNoRepeats = function(s, k) {
    
//     let output = []
   
//     for(let i = 0; i < s.length; i++){
//         let subStr = new Set(s.slice(i, i+k))
//         if(subStr.size === k ){
//           output.push([...subStr].join(""))
//         }
//     }
//  return (output.length)


// };