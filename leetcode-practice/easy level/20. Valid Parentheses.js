// var isValid = function(s) {

//     const map = { 
//         "(": ")",
//         "[": "]",
//         "{": "}"  
//     } 
    
//         let stack = [];
//         for(let char of s){ 
//             if(map[char]){ //if open parentheses present
//                 stack.push(map[char])  //push value of char
//             } else { // if close parentheses present
//                 if (stack.pop() !== char)
//                     return false
//             }   
//         }
//        return stack.length === 0
// };


var isValid = function(s) {
    let hash = { 
        "(": ")", 
        "{": "}", 
        "[": "]" }
    
    let stack = []
    
    for(const char of s){
        if(hash[char]){
            stack.push(hash[char])
        } else if(stack[stack.length - 1] == char){
                stack.pop()
        } else {
            return false
        }
    }
    
    return stack.length === 0
};



// console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) //false