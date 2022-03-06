/*

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

 

Example 1:

Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
Example 2:

Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.
Example 3:

Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".

 */

var kthDistinct = function(arr, k) {
    
    let hash = {}
    for(const string of arr){
        // if(!hash[string]) hash[string] = 1
        // else hash[string]++
        !hash[string] ? hash[string] = 1 : hash[string]++
    }
    // arr.forEach(string => hash[string] =  hash[string] + 1 || 1)
    console.log(hash)


   let output = []

   for(const key in hash){
       if(hash[key] == 1){
           output.push(key)
       }
   }
    // for(const [key, value] of Object.entries(hash)){
    //     if(value == 1){
    //         output.push(key)
    //     } 
    // }

    
  // if(output[k-1] == undefined){
  //     return ""
  // }else {
  // return output[k-1]
  //     }

    return output[k-1] || ""
    
};
console.log(kthDistinct(arr = ["d","b","c","b","c","a"], k = 2))