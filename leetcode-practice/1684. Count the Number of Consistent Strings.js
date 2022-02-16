// You are given a string allowed consisting of distinct characters and an array of strings words.
//  A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {
    // Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
       let allowedArray = new Set(allowed);
        console.log(allowedArray)
    
        return words.reduce((acc, curr) => {
            // console.log(curr, "curr")
            // console.log(acc, "acc")
            return [...curr].every(str => allowedArray.has(str)) ? acc += 1 : acc;
        }, 0);
}

    // let count = 0;
    // for(const word of words){
    //     for(let i=0; i<word.length; i++){
    //         if(!allowed.includes(word[i])){
    //             count++;
    //             break;
    //         }
    //     }
    // }
    // return words.length - count;

    // let count = 0;
    // for(const word of words){
    //     for(let i=0; i<word.length; i++){
    //         if(!allowed.includes(word[i])){
    //             console.log(word)
    //             break;
    //         }
    //     }
    // }
    // return words.length - count


console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))
// console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]))
// console.log(countConsistentStrings("fstqyienx", ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"], ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]))

 
/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/