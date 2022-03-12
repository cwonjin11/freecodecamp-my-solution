// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []



var findDuplicates = function(nums) {
    let hash = new Map()
    let output = []
    for(const num of nums){
       !hash.has(num) ? hash.set(num,1) : hash.set(num, hash.get(num)+1)
        if(hash.get(num) > 1) {
            output.push(num)
        }
    }

    return output
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]))//[2,3]

