// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

var findShortestSubArray = function(nums) {
    let hash = {}
    let maxFrequency = 0
    let output = Infinity
    
    for(const num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
        if(maxFrequency <= hash[num]){
            maxFrequency = hash[num]
        }
    }
    // console.log(hash, maxFrequency)

    for(key in hash){
      if(hash[key] == maxFrequency){
        //   console.log(nums.lastIndexOf(Number(key)),nums.indexOf(Number(key)))
        output = Math.min(output,(nums.lastIndexOf(Number(key)) - nums.indexOf(Number(key)) + 1)) 
      }
    }
    return output
};