
function solution(N) {

    //change integer to binary

    let binaryNum = N.toString(2)
    let maxGap = 0
    let currentGap = 0
    
    // for (let i = 0; i <= binaryNum.length; i++){
       for (let digit of binaryNum) {
       if(digit === '0'){
        currentGap++
       } else {
           maxGap = Math.max(maxGap, currentGap)
           currentGap = 0
        }
    }
    return maxGap
}

console.log(solution(9))
console.log(solution(32))
console.log(solution(1041))
