const findNumberMissing = (arr) => {

    let sum = 0
    let tempSum = 0

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        tempSum += i + 1
    }

    return sum - tempSum

}


console.log(findNumberMissing([1,2,3,4,6,7,8,9,10]))
console.log(findNumberMissing([1,3,2,4,7,6,8,9,10]))