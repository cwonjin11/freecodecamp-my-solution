
/*
Create a function takes in an array of numbers
Output the maximum number from the array
 */

// 1. create an output variable equals to 0 as initial value 

// 2. loop through each index 
    // if arr[i] > output 
    // replace output 
    //return  arr[i]
    function maxNumber(arr) {

        let max = Math.max(...arr)
        console.log(max)
        
    }


    console.log(maxNumber([3,6,4,5,2,1]))
    console.log(maxNumber([1]))
    
    

// function maxNumber(arr) {

//     let output = 0
//     for (let i = 0; i < arr.length; i++){
//         let currentNum = arr[i]
//         if (currentNum > output){
//             output = currentNum
//         }
//     }
//     return output


// }

// console.log(maxNumber([3,6,4,5,2,1]))
// console.log(maxNumber([1]))


