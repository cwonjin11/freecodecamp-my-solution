

   
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(num) {
 
    //edge case
    if(num < 2){
        return num
    }

    let lastTwo = [0, 1]

    for( let i=0; i<num-1; i++){
        let sum = lastTwo[0] + lastTwo[1]
        lastTwo = [lastTwo[1], sum]
    }    
    return lastTwo[1]
}
console.log(fib(6))