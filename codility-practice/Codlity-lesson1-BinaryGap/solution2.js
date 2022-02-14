function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryNum = N.toString(2).split('')
    let maxGap = 0
    let currentGap = 0

    console.log(binaryNum)
    for(let i = 0; i < binaryNum.length; i++) {
        if(binaryNum[i] === '1') {
            console.log(binaryNum[i])
            maxGap = Math.max(maxGap, currentGap)
            currentGap = 0
        } else {
            currentGap++
            
        }
    }
    return maxGap
}

console.log(solution(1041))

//submitted solution 
//https://app.codility.com/demo/results/trainingXF38U8-D8K/