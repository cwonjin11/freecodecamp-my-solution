// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.


// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

// Example 2:
// Input: s = "aeiou"
// Output: ""


// var removeVowels = function(s) {
    
//     const vowels = "aeiou";
//       return s.split("").filter(char => !vowels.includes(char)).join("")   
//   };

var removeVowels = function(s) {
    
    let vowelsHash = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }

    
   let splittedString = s.split("")
   let string = ""
   for( let i = 0; i < splittedString.length; i++){
       if(!vowelsHash[splittedString[i]]){
           string += splittedString[i]
       } 
   }
    return string
    
};

// var removeVowels = function(s) {
    
//     let result = []
//     let vowels = ["a", "e", "i", "o", "u"]
//     // console.log(splitedS)

//     for(let i = 0; i < s.length; i++){
//         if(!vowels.includes(s[i])) {
//             result.push(s[i])
//         }
//     }
//     return result.join("")
// };


console.log(removeVowels("leetcodeisacommunityforcoders")) //"ltcdscmmntyfrcdrs"