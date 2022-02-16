// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.


// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

// Example 2:
// Input: s = "aeiou"
// Output: ""

var removeVowels = function(s) {
    
    let result = []
    let vowels = ["a", "e", "i", "o", "u"]
    // console.log(splitedS)

    for(let i = 0; i < s.length; i++){
        if(!vowels.includes(s[i])) {
            result[result.length] = s[i]
        }
    }
    return result.join("")
};


console.log(removeVowels("leetcodeisacommunityforcoders")) //"ltcdscmmntyfrcdrs"