// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// Example 2:
// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 



//my approach: use Set to prevent duplicated number from string
// find digits from given string s by isNaN(s) method
// add digits to set and sort by decreasing order
// return index 1's value from the sorted array or -1(for undifiend return)

var secondHighest = function(s) {

    let set = new Set()
    
    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])){
            set.add(s[i])
        }
    }
    // let result = Array.from(set).sort((a,b) => b-a)  // either way works
    let result = [...set].sort((a,b) => b-a)    // convert set hash as an array
    return result[1] || -1
    
};

console.log(secondHighest("dfa12321afd")) // 2