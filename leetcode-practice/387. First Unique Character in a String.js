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


var firstUniqChar = function(s) {
    
    let map = {}
    
    for(const char of s){
        if(!map[char]){
            map[char] = 1
        } else {
            map[char]++
        }
    }
    
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