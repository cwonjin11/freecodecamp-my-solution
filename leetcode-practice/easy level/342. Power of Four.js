
var isPowerOfFour = function(n) {
    let total = 1

    while(total < n){
        total *= 4
    }
    return total === n
}

console.log(isPowerOfFour(64))
console.log(isPowerOfFour(27))