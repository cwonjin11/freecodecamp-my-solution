/*

Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.


Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.*/

//two pointer approach : Must sort the array first!!
// if answer(two sum) is smaller than the target(k), we increment lower pointer(left). 
// Otherwise, we decrement higher pointer(right) 
var twoSumLessThanK = function(nums, k) {

    nums.sort( (a,b) => a-b)
    
    let left = 0
    let right = nums.length - 1
    let answer = -1
    
    while(left < right) {
        if(nums[left] + nums[right] < k){
            answer = Math.max(answer, nums[left] + nums[right])
            left++
        } else {
            right--
        }
    }
    return answer
};





// var twoSumLessThanK = function(nums, k) {
    
//     // let filteredArray = [-1] // need to find max sum
//     // let sum = 0
    
//     // for(let i = 0; i < nums.length; i++){
//     //     for(let j = i+1; j < nums.length; j++){
//     //         if(nums[i] + nums[j] < k) {
//     //             sum = nums[i] + nums[j]
//     //             if(!filteredArray.includes(sum)){
//     //                 filteredArray.push(sum)
//     //             } 
//     //         } 
//     //     }
//     // }
//     // return Math.max(...filteredArray) 


//     let result = -1
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){     
//             let sum = nums[i] + nums[j]
//                 if(sum > result && sum < k ) {
//                     result = sum 
//                 } 
//         }
//     }
//     return result 
     
    
    
// };


console.log(twoSumLessThanK([1,2,3,4,5,6,7,8],9))