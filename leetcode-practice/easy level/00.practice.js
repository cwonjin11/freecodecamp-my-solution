
// /**
//  * arr1.reverse() mutates original array
//  */
// let arr1 = [1,2,3,4,5]
// let reversed1 = arr1.reverse()

// console.log(arr1) // [ 5, 4, 3, 2, 1 ]
// console.log(reversed1) // [ 5, 4, 3, 2, 1 ]
// /**
//  * To keep the original array as it is, use spread operator.
//  */
// let arr2 = [1,2,3,4,5]
// let reversed2 = [...arr2].reverse()

// console.log(arr2) // [ 1, 2, 3, 4, 5 ]
// console.log(reversed2) // [ 5, 4, 3, 2, 1 ]

// /**
//  * Check to see if certain element is in the array. 
//  * 1. use if else conditinoal state with "||" . Not best practice 
//  * 2. includes method // good!
//  * 3. use Hash set and use has method // awesome!
//  */

// let set = new Set(arr2)
//     if(set.has(6)){
//        console.log(true)
//     } else {console.log(false)}




//=================================================================================
// .map(Number) makes  elements of array as type of number
let num = 1234
let arr = num.toString().split("").map(Number)  
for(let n of arr){
   console.log(typeof n)
}

//=================================================================================