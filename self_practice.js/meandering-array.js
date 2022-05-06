// function meanderingArray(unsorted) {
//     // Write your code here
//     unsorted.sort((a,b) => a - b)
//     let startIndex = 0
//     let endIndex = unsorted.length- 1
//     let flag = true
//     let result = []
    
//     for(let i=0; i<unsorted.length; i++){
//         if(flag){
//             result[i] = unsorted[endIndex--]
//         } else {
//             result[i] = unsorted[startIndex++]
//         }
//         flag = !flag
//     }
//     return result
// }

// console.log(meanderingArray([7, 5, 2, 7, 8, -2, 25, 25]))


function meanderingArray(unsorted) {

    let sorted = unsorted.sort((a,b) => a - b)
    let output = []

    for(let i = 0; i <= sorted.length + 1; i++){

        output.push(sorted.pop())
        output.push(sorted.shift())

    }
    console.log(unsorted)
    return output
}

console.log(meanderingArray([1, -1, -3, 9, -2, -5, 4, 8,]))


//input [7, 5, 2, 7, 8, -2, 25 ]  => 25 -2 25 2 8 5 7,7

//https://www.linkedin.com/pulse/meandering-array-javascript-prashant-goel/