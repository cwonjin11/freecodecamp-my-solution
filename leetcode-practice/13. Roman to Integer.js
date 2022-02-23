// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
const hash = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50,
    "C": 100,
    "D": 500, 
    "M": 1000
}

var romanToInt = function(s) {
  
    // 1000 + (1000-100 = 900) +  1000 + ()
    let output = 0
   for(let i = 0; i < s.length; i++){
      if(hash[s[i]] < hash[s[i+1]]){ // if roman symbol i is smaller than i+1 then substract from output // i가 i+1 작으면 i 를 빼 
          output -= hash[s[i]]   
        //   console.log(hash[s[i]]) //=> C, X, I 111
      } else {                  // else i 가 i+1 보다 크면 i 를 더해
      output += hash[s[i]]  
        //   console.log(hash[s[i]]) //=> M, M, C, V 2105
          
      }
   }
    return output //2105 - 111 => 1994
    
};

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) //1994