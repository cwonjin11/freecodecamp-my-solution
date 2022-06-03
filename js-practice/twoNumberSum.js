/* Write a function that takes in a non-empty array of distinct ingegers 
and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, 
the function should return them in an array, in any order.
If no two numbers sum up to the target sum, the function should return 
an empty array. 
Note that the target sum has to be obtained by summing two different itegers in the array; 
you can't add a single integer to itself in order to obtain the target sum. 
You can assume that there will be at most one pair of numbers 
summing up to the target sum.*/

/* examp input: 
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10 
*/


// function twoNumberSum(array, targetSum){
//     let hash = {}

//     for(let num of array){
//         let targetedNum = targetSum - num
//         if(targetedNum in hash){
//             return [targetedNum,  num]
//         } else {
//         hash[num] = true
//         }
//     }
// return []
// }

function twoNumberSum(array, targetSum){

    let left = 0
    let right = array.length - 1

    while(left < right){
        if(array[left] + array[right] == targetSum){
            return [array[left], array[right]]
        } else if(array[left] + array[right] < targetSum){
            left++
        } else {
            right--
        }
    }
    return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))