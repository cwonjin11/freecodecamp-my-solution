// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// var numIdenticalPairs = function(nums) {
//     let output = []
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] == nums[j]){
//                 output.push([i,j])
//             }
//         }
//     }
//     return output.length
    
// };


// time O(N^2) space O(1)
//  var numIdenticalPairs = function(nums) {
//      let count = 0
    
//      for(let i=0; i<nums.length; i++) {
//          for(let j=i+1; j<nums.length; j++) {
//              if(nums[i] === nums[j]) {
//                  count++
//              }
//          }
//      }
    
//      return count
//  };


// time O(N) space O(N)
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0
    
    for (const number of nums) {
        // if (map[number]) {
        //     count += map[number];
        //     map[number] += 1;
        // } else {
        //     map[number] = 1;
        // }

        if(!map[number]){
            map[number] = 1
        } else {
            count = count + map[number]
            console.log(map[number])
            map[number]++
            console.log(map)
        }
    }
    // console.log(map)
    return count
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))
// console.log(numIdenticalPairs([1,1,1,1]))