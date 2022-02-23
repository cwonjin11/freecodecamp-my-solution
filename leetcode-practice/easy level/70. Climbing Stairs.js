// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/*
n=1 => 1
n=2 => (1,1), (2) => 2
n=3 => (1,1,1), (1,2) (2,1) => 3
n=4 => (1,1,1,1) (1,1,2), (1,2,1), (2,1,1) (2,2) => 5
n=5 => (1,1,1,1,1) (1,1,1,2), (1,1,2,1), (1,2,1,1) (2,1,1,1), (2,2,1) (2,1,2) (1,2,2)=> 8
 */


let climbStairs = function(n) {
    
    if(n <= 2){
        return n
    }

    let first = 1
    let second = 2

    for(let i=3; i <= n; i++){
        let sum = first + second
        first = second
        second = sum
    }
    return second
};

console.log(climbStairs(4))
console.log(climbStairs(5))