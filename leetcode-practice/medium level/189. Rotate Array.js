// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?




// var rotate = function(nums, k) {
//     // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
//     k %= nums.length 
     
//     let reverse = function(i, j){
//      while(i < j){
//          let temp = nums[i]
//          nums[i] = nums[j]
//          nums[j] = temp
//         //  [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
//          i++
//          j--
//      }
//     } 
//     reverse(0, nums.length-1); // reverse   <--<------
//     reverse(0, k-1) // reverse first part ---><----
//     reverse(k, nums.length-1)// reverse second part --->----->
     
//  };



 var rotate = function(nums, k) {
   
    k %= nums.length 
     
    let reverse = (i, j) => {
        while(i < j){
            [ nums[i], nums[j] ] = [ nums[j], nums[i] ] // es6 swap method
            i++
            j--
        }
    } 
    reverse(0, nums.length-1); // reverse the entire array nums
    reverse(0, k-1) // and then, reverse first part 
    reverse(k, nums.length-1)// and then, reverse second part
    // return nums 
};


 console.log(rotate(nums=[1,2,3,4,5,6,7], k=3))