// var removeDuplicates = function(s) {

//    let stack = []

//    for(const char of s){
//        if(char == stack[stack.length - 1]){
//            stack.pop(char)
//        } else {
//            stack.push(char)
//        }
//    }
//    console.log(stack)
//    return stack.join("")

// }


var removeDuplicates = function(s) {

    let stack = []
 
    for(const char of s){
        if(char !== stack[stack.length - 1]){
            stack.push(char)
        } else {
            stack.pop(char)
        }
    }
    console.log(stack)
    return stack.join("")
 
 }

console.log(removeDuplicates("abbaca")) // ca