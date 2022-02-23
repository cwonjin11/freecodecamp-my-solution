
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    
    const hashMap = {}
    let max 

    for (let el of nums){
        if(!hashMap[el]){
            hashMap[el] = 1
        } else {
            hashMap[el]++
            // console.log(hashMap)
        }
    }
    max = Object.keys(hashMap).reduce((a, b) => hashMap[a] > hashMap[b] ? a : b)
    console.log(Object.keys(hashMap))
return max
};

console.log(majorityElement([3,2,3]))
// console.log(majorityElement([2,2,1,1,1,2,2]))
