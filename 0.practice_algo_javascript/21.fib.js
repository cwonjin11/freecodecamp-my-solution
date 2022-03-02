

// this case no 0
//this case ==> [1, 1, 2, 3, 5, 8, 13, 21, 34]

// time complexity: O(2^n )
const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(1))
console.log(fib(7))
console.log(fib(0))
console.log(fib(50))


// const foo = (n) => {
//     if(n <= 1) return;
//     foo(n - 2)
// }

// console.log(foo(6))