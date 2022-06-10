// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23



// if current sum is less than 0, we don't need  negative sum. we set currens sum as 0 again and add next element
// compare current sum and maxsum and return max sum
// function maxSubArray(nums) {

//     let maxSum = nums[0]
//     let currSum = 0
    
//     for(const num of nums){
//         if(currSum < 0) currSum = 0
//         currSum += num
//         maxSum = Math.max(currSum, maxSum)
//     }

//     return maxSum

// };


// best solution: Kadane's Algorithm
function maxSubArray(nums) {

    let currentSubarray = nums[0]
    let maxSubarray = nums[0]
    
    for( let i = 1; i < nums.length; i++){  // important!! we start our loop from 1 since we set initial values as nums[0] above
        currentSubarray = Math.max(currentSubarray + nums[i], nums[i])
        maxSubarray = Math.max(currentSubarray, maxSubarray)
    }

    return maxSubarray

};





console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5,4,-1,7,8])) // 23

