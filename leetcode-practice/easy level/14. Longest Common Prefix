// var longestCommonPrefix = function(strs) {

//     // console.log(strs[0])
//     for(let i = 0; i < strs[0].length; i++){
//         for(const s of strs){
          
//             if(s[i] !== strs[0][i]){
               
//             return s.slice(0,i) //end not included
//             }
//         }
//     }
// return strs[0];
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))


var longestCommonPrefix = function(strs) {

    // console.log(strs.length)
    for(let i = 0; i < strs[0].length; i++){
        for(const s of strs){
            if(s[i] !== strs[0][i]){
                // s.slice(0,i)  //end not included
                return s.slice(0,i)
            }
            
        }
    }
    return strs[0];

};


console.log(longestCommonPrefix(["flower","flow","flight"])) // fl
console.log(longestCommonPrefix(["flower","flower","flower"])) // flower


