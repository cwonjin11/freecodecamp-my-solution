
function twoSum(nums, target) {

    let numbers = {}
  //2:0, 7:1, 11:2, 
    for (let i = 0; i < nums.length; i++){
        let targetedNumber = target - nums[i]
        if (targetedNumber in numbers){
            return [numbers[targetedNumber], i]

        } else {
            numbers[nums[i]] = i
            // console.log(numbers)
        }
    }
    return []
}


console.log(twoSum([2,7,11,15], 17))



// const twoSum = (nums, target) => {
    
//     const result = []
//     for (let i=0; i<nums.length; i++) {
//         for (let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j] === target){
//                 result.push(i,j)
//             }
//         }
//     }
//     return result
// }

// console.log(twoSum([2,7,11,15], 13))
