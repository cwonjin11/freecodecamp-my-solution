// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]


var sumZero = function(n) {
    
    let output = []
    let half = parseInt(n/2)
    
    for(let i=1; i <= half; i++){
        output.push(i)
        output.push(-i)
    }
    //check odd number
    if(n % 2){
        output.push(0)
    }
    return output
};
    
    console.log(sumZero(3))