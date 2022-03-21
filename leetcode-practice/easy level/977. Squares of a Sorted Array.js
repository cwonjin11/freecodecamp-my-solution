// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(nums) {
    
  let left = 0, right = nums.length -1
  let result = []

  while (left <= right){
      let leftSquares = nums[left] * nums[left]
      let rightSquares = nums[right] * nums[right]

      if(leftSquares > rightSquares){
          result.push(leftSquares)
          left++
      } else {
        result.push(rightSquares)
        right--
      }
  }
  return result.sort((a,b) => a-b)

};

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]

// var sortedSquares = function(nums) {
    
//     let output = []

//     for(let num of nums){
//         num = num * num
//         output.push(num)
//     }
//     return output.sort((a,b) => a - b)
// };




// var sortedSquares = function(nums) {
    
//     let output = []

//     for(let i = 0; i < nums.length; i++){
//         let squareNum = nums[i] * nums[i]
//         output.push(squareNum)
//     }
//     return output.sort((a,b) => a - b)
// };


// console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
// console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]
