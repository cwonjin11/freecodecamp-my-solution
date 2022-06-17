
const binaryGap = (number) => {

    let biNum = number.toString(2)
  
    let maxCount = 0
    let currCount = 0

    for(let num of biNum){
        if(num == 0){
            currCount++
        } else {
            maxCount = Math.max(currCount, maxCount)
            currCount = 0
        }
    }
    return maxCount
}
console.log(binaryGap(1041)) // 1000010001 => 5
console.log(binaryGap(15)) // 1111 => 0
console.log(binaryGap(32)) // 100000 => 0





function solution(n) {
    let biNum = n.toString(2)
    let maxCount = 0
    let currCount = 0
    for(let i = 0; i < biNum.length; i++){
        if(biNum[i] == 0){
            currCount++
        } else {
            maxCount = Math.max(currCount, maxCount)
            currCount = 0
        }
    }
    return maxCount
}