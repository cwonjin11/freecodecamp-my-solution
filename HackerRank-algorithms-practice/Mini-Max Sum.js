function miniMaxSum(arr) {


    // Write your code here
    
//     let minArray = []
//     let maxArray = []

//    let sortedArray = arr.sort()


//     for(let i = 0; i < sortedArray.length - 1; i++){
//         minArray.push(arr[i])
//     }
//     let sumMin = minArray.reduce(function (previousValue, currentValue) {
//         return previousValue + currentValue
//       }, 0)


//     for(let i = 1; i < sortedArray.length; i++){
//         maxArray.push(arr[i])
//     }

//     let sumMax = maxArray.reduce(function (previousValue, currentValue) {
//         return previousValue + currentValue
//       }, 0)
//     console.log(sumMin, sumMax)
    const sum = arr.reduce((sum, current) => sum + current);
    const max = sum - Math.min(...arr);
    const min = sum - Math.max(...arr);
    console.log(min, max);
}



console.log(miniMaxSum([1,3,5,7,9]))

// since arr len is fixed
function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a,b) => a - b)
    let minSum = 0
    let maxSum = 0
    
    for(let i = 0; i < arr.length; i++){
        minSum = arr[0] + arr[1] + arr[2] + arr[3]
        maxSum = arr[1] + arr[2] + arr[3] + arr[4]
    }
    
    console.log(minSum + " " + maxSum)
}