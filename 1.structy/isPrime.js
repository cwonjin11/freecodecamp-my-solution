

const isPrime = (n) => {

    if(n < 2) return false
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false
    }
    return true

}

//better time complexity O()
const isPrime1 = (n) => {
    if(n < 2) return false

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false
    }
    return true

}


console.log(isPrime(7)) //treu
console.log(isPrime(2017)) //true
console.log(isPrime(31)) //true
console.log(isPrime(28)) //false

console.log(isPrime1(7)) //treu
console.log(isPrime1(2017)) //true
console.log(isPrime1(31)) //true
console.log(isPrime1(28)) //false

