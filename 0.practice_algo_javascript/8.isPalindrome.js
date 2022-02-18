

// function isPalindrome(s) {

//     let reverse = s.replace(/[^a-z0-9]/gi,"").split("").reverse().join('').toLowerCase()
//     let original = s.replace(/[^a-z0-9]/gi,"").split("").join('').toLowerCase()
//     console.log(reverse)
//     console.log(original)
//     return reverse === original
// }

// function isPalindrome(s) {
//     // s = s.replace(/\W+/g,"").toLowerCase()
//     s = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
//     // console.log(s)
//     let leftIndex = 0
//     let rightIndex = s.length - 1

//     while (leftIndex < rightIndex){
//         if (s[leftIndex] !== s[rightIndex]) {
//             return false
//         } else {
//             leftIndex++
//             rightIndex--
//         }
//     }
//     return true
// }

  
  
var isPalindrome = function(x) {
    
    let converted = x.toString()
    // console.log(converted)
    let len = x.toString().length
    // console.log(len)
    let output = ""

      for(let i = len - 1; i > -1  ; --i){
        output += converted[i]
      }

    return output === converted
    


};


console.log(isPalindrome(121))