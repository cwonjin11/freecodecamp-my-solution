//Given a string s, find the length of the longest substring without repeating characters.




var lengthOfLongestSubstring = function(s) {
    
  let set = new Set() //create hash set
  let i = 0    // j for add char, 
  let j = 0    // i for delete dupe char
  let maxLength = 0    // create variable maxLength 

  while(j < s.length){   //while loop (j < s.length)
      if(!set.has(s[j])){  // if s[j] is not in the set
          set.add(s[j])       // add s[j]
          j++ //increment j by 1
      } else { // else 
          set.delete(s[i])  // delete s[i]
          i++ //increment i by one 
      }
      console.log(set)
      //redefine maxLength  = compare with set.size. make sure to compare it is substring not subsequence and set will do this automatically
      maxLength = Math.max(maxLength, set.size) 
  }

  return maxLength
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




console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring1("abcabcbb")) // 3