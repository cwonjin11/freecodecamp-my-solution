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


var twoSumLessThanK = function(nums, k) {
    
    // let filteredArray = [-1] // need to find max sum
    // let sum = 0
    
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i] + nums[j] < k) {
    //             sum = nums[i] + nums[j]
    //             if(!filteredArray.includes(sum)){
    //                 filteredArray.push(sum)
    //             } 
    //         } 
    //     }
    // }
    // return Math.max(...filteredArray) 


    let result = -1
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){     
            let sum = nums[i] + nums[j]
                if(sum > result && sum < k ) {
                    result = sum 
                } 
        }
    }
    return result 
     
    
    
};


console.log(twoSumLessThanK([1,2,3,4,5,6,7,8],9))