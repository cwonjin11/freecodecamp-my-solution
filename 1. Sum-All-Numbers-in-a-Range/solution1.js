// Don't even declare min or max
// By using Javascript built-in method Math.min or Math.max, we can easily solve this problem
// I used spread operator as parameter ; e.g => ...arr

const sumAll = (arr) =>  {

    let sum = 0
    for(let i=Math.min(...arr); i<=Math.max(...arr); i++){
       sum += i
    }
    return sum

}
console.log(sumAll([1, 10]))