
/* write a fucntion takes in an array of numbers and output the average of all numbers */

/* [1,2,3] => 3 
    [1,2,3,4,5] => add all numbers and divide it by the length of the array => 3
*/
/*
1. Create a variable "average". Initialized by 0
2. Create a variable "sum". Starts with 0
3. Loop through each index
    Add each arr[i] to sum variable
    Divide the sum variable by arr.length
4. return average
*/


function averageNumber(arr) {
    
    let average = 0
    let sum = 0

    for (let i=0; i < arr.length; i++){
        sum += arr[i]
        console.log(sum, "sum")
        average = sum / arr.length
        console.log(arr.length, "length")
    }
    return average
}

// console.log(averageNumber([2,8,14]))
console.log(averageNumber([3]))





















// function averageNumber (arr) {
    // create a variable to hole average. Starts with 0
    // Loop through each index 
    // add empty variable to each index
    // divide by the length
    // return average

    // let average = 0
    // let sum = 0
    // for (let i=0; i<arr.length; i++){
    //     let currentNum = arr[i]
    //     sum += currentNum
    //     average = sum / arr.length
    // }
    // return average
    
// }