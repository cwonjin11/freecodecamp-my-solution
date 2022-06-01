//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    
    let set = new Set()
    let longest = 0
    let l = 0
      
    for (let r = 0; r < s.length; r++) {
      while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
      }
      set.add(s[r]);
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
};


var lengthOfLongestSubstring1 = function(s) {
    
  let set = new Set()
  let i = 0
  let j = 0
  let maxLength = 0
   
  while( j < s.length){
    if(!set.has(s[j])){
      set.add(s[j])
      j++
    } else {
      set.delete(s[i])
      i++
    }
    maxLength = Math.max(maxLength, set.size)
  }
  
  return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring1("abcabcbb")) // 3