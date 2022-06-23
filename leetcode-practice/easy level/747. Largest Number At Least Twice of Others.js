// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
// Example 3:

// Input: nums = [1]
// Output: 0
// Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.


var dominantIndex = function(nums) {
    const max = Math.max(...nums)
    let min = max/2
    
    for(let i = 0; i < nums.length; i++){
        let found = nums.find(n => n > min && n !== max)
        if(found){
            return -1
        } else {
            return nums.indexOf(max)
        }
    }
};

//or
var dominantIndex = function(nums) {
    if(nums.length == 1) return 0
    let largest = Math.max(...nums)
    let largestIndex = nums.indexOf(largest)
    let half = largest / 2



    nums.splice(nums.indexOf(largest),1)
    nums.sort((a,b) => b - a)

   return nums[0] <= half ?  largestIndex  : -1
};


console.log(dominantIndex([3,6,1,0])) // 1
console.log(dominantIndex([1,2,3,4])) // -1
console.log(dominantIndex([1])) // 0


