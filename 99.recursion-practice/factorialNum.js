
//iterative solution
const factorialNum = (num) => {
    let sum = 1
    for(let i = num; i > 1; i--){
        sum *= i
    }
    return sum
}
console.log(factorialNum(5))


//recursive solution
const factorialNum1 = (num) => {
    if(num === 1) return 1
    return num * factorialNum(num - 1)
}
console.log(factorialNum1(5))