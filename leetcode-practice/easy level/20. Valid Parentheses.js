var isValid = function(s) {

    const map = { 
        "(": ")",
        "[": "]",
        "{": "}"  
    } 
    
        let stack = [];
        for(let char of s){ 
            if(map[char]){ //if open parentheses present
                stack.push(map[char])  //push value of char
            } else { // if close parentheses present
                if (stack.pop() !== char)
                    return false
            }   
        }
       return stack.length === 0
};

// console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) //false