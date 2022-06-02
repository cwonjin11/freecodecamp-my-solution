// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

// solution by chaning our goal(the last index), looping through backward
var canJump1 = function(nums) {
    let goal = nums.length - 1 //set goal as the last index of nums array

    for(let i = nums.length - 1; i > -1; i--){ // loop from back
        if(i + nums[i] >= goal){ // if current index + value of current index is greater or equal to current goal, update goal as current index
            goal = i
        }
    }
    return goal === 0  // Finally, if goal variable is equalt to zero, it means we can reach to the last index of nums array, otherwise, false
}


// typical for loop. 
var canJump = function(nums) {

    let max = nums[0] //set max varialbe as the first element of nums array
    for(let i = 1; i < nums.length; i++){ // loop through each element starting from index 1
        if(max < i) return false // if max is less than current index, return false
        max = Math.max(max, nums[i] + i) // change max as maximum value of max or current index + the value of current index
    }

    return true
}

//i       1  2  3  
//max  2  4  4  4
  
//i       1  2  3  
//max  3  3  3  

console.log(canJump([2,3,1,1,4])) //true
console.log(canJump([3,2,1,0,4])) //false


