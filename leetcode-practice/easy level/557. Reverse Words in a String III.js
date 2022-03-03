// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"


var reverseWords = function(s) {
    s = s.split(" ")
    let output = []
    
    for(let i = 0; i < s.length; i++){
      str = s[i].split("").reverse().join('')
        output.push(str)
    }
   
    return output.join(" ")
}


console.log(reverseWords("Let's take LeetCode contest")) //s'teL ekat edoCteeL tsetnoc