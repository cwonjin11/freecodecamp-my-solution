
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


var intersection = function(nums1, nums2) {
    
    let hash = {}
    
    for(const num of nums1){
        hash[num] = true
    }
    
    let result = []
    for(let i = 0; i < nums2.length; i++){
        if(hash[nums2[i]]) {
            result.push(nums2[i])
        }
    }
    return [...new Set(result)]
};

console.log(intersection([4,9,5], [9,4,9,8,4])) // [4,9] or [9,4]