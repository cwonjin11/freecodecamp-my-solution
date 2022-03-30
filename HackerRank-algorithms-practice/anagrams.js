// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// Given a string, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

// Example

// Break  into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

// Function Description

// Complete the anagram function in the editor below.

// anagram has the following parameter(s):

// string s: a string
// Returns

// int: the minimum number of characters to change or -1.
// Input Format

// The first line will contain an integer, , the number of test cases.
// Each test case will contain a string .

// Constraints


//  consists only of characters in the range ascii[a-z].
// Sample Input

// 6
// aaabbb
// ab
// abc
// mnop
// xyyx
// xaxbbbxx
// Sample Output

// 3
// 1
// -1
// 2
// 0
// 1
// Explanation

// Test Case #01: We split  into two strings ='aaa' and ='bbb'. We have to replace all three characters from the first string with 'b' to make the strings anagrams.

// Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

// Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

// Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

// Test Case #05:  and  are already anagrams of one another.

// Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb".


function anagram(s) {
    // Write your code here
    let mid = (s.length)/2
    let firstHalf = s.substring(0, mid)
    let secondHalf = s.substring(mid)
    // console.log(secondHalf)
    if(s.length % 2 !== 0){
        return -1
    }

    let count = 0
    for(let i=0; i < firstHalf.length; i++){
        if( secondHalf.includes(firstHalf[i]) ){
            secondHalf = secondHalf.replace(firstHalf[i], "")
        } else {
            count++
        }
    } 
    return count
}
console.log(anagram("aaabbb")) // 3
console.log(anagram("ab")) // 1
console.log(anagram("abc")) // -1
console.log(anagram("mnop")) // 2
console.log(anagram("xyyx")) // 0
console.log(anagram("xaxbbbxx")) // 1  //xaxb  bbxx


