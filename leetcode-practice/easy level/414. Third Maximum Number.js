// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

/**
 * @param {number[]} nums
 * @return {number}
 */

// create hash set and remove(delete) the max number by looping through 2 times( i < 2) 
// so we can get the max value of the rest of set

 var thirdMax = function(nums) {
 
    // if(nums.length<3) return Math.max(...nums) // not necessarily needed since we define set size below
    
    let set = new Set(nums)
    
    if(set.size < 3 ) return Math.max(...set); // base case
    
    for(let i=0; i < 2; i++){ // loop till less than 2 to have the thrid max in our set
        set.delete(Math.max(...set)) // keep deleting max till 2nd loop
    }
    console.log(set)
    return Math.max(...set); // get the maximum from set
    
};