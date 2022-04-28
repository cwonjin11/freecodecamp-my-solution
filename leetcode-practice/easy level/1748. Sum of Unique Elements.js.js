// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.


// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


// var sumOfUnique = function(nums) {
    
//     let map = {}
//     let sum = 0
    
//     for(const num of nums){
//         // if(!map[num]){
//         //     map[num] = 1
//         // } else {
//         //     map[num]++
//         // }
   //     // !map[num] ? map[num] = 1 : map[num]++
//     }
    
//     for(const key in map){
//         if(map[key] === 1) {
//             // sum += parseInt(key)
//             sum += +key
//         }
//     }
//     return sum
    
// };

// console.log(sumOfUnique([1,2,3,2]))


var sumOfUnique = function(nums) {
    
    let hash = {}
    
    for(const num of nums){
        if(!hash[num]){
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
   
    let output = 0
    for(const key in hash){
        if(hash[key] == 1){
            output += Number(key) // or output += +key  
        }
    }
    return output
    
}
console.log(sumOfUnique([1,2,3,2])) // 1+3 = 4