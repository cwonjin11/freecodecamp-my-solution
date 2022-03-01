// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

 

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.



/*
var finalValueAfterOperations = function(operations) {
    let hash = {
        "--X" : -1,
        "X--" : -1,
        "X++" : 1,
        "++X" : 1  
    }
    
    let output = 0
    
    for(const operation of operations){
        output += hash[operation]
    }
    return output
};
 */

var finalValueAfterOperations = function(operations) {

    let output = 0

    for(const operation of operations) {
        if(operation === 'X++' || operation === '++X') 
        output++
        else output--
    }

    return output


}



console.log(finalValueAfterOperations(["--X","X++","X++"])) //1
console.log(finalValueAfterOperations(["++X","++X","X++"])) //3
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))//0