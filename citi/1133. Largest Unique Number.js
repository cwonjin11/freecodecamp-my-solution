// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
// Example 2:

// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.


// var largestUniqueNumber = function(nums) {  
//     let map = {}
//     let modifiedArray = [-1]

//     for(const num of nums){
//        !map[num] ? map[num] = 1 : map[num]++
//     }
//     console.log(map)

//     for(const num in map){
//         if(map[num] === 1){
//             modifiedArray.push(num)
//         }
//     }
//     return Math.max(...modifiedArray) 
// };

var largestUniqueNumber = function(nums) {
let map = {}
let maxNum = -1

for(const num of nums){
    !map[num] ? map[num] = 1 : map[num] ++
}
console.log(map)

for(const num in map){
    if(map[num] === 1){
        maxNum = Math.max(maxNum, num)
    }
}
return maxNum 
}


//or

var largestUniqueNumber = function(nums) {
    
    let hash = {}
    for(let num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
   
    let arr = []
    for(let key in hash){
        if(hash[key] === 1){
            arr.push(+key)
        }
    }
    arr.sort((a,b) => b-a)
    return arr[0] || -1
};


console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))
console.log(largestUniqueNumber([9,9,8,8]))