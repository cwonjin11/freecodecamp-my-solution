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



var secondHighest = function(s) {
    
    let splitted = [...new Set(s.split(''))] 
    let result = []

    for(let i = 0; i < splitted.length; i++){
        let splittedNumber = parseInt(splitted[i])
        if(splittedNumber >= 0){
            result.push(splittedNumber)
        }
    }

    result.sort((a,b) => b-a)

    return result.length > 1 ? result[1] : -1
}

console.log(secondHighest("dfa12321afd")) // 2