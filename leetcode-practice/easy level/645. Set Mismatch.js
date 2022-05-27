// var findErrorNums = function(nums) {
    

//     let len = nums.length;
//     let sum = (len*(len+1))/2;
//     // console.log(sum)

//     let tempSum = 0, actualNum = 0;
//     let hash = {};
//     for(let num of nums){
//         if(hash[num]){
//             actualNum = num;
//         }
//         else{
//             hash[num] = true;
//             tempSum += num;
//         }
//     }
//     console.log(hash)
//     // return [actualNum, sum - tempSum];
   
// };
// console.log(findErrorNums([1,2,2,4]))
// console.log(findErrorNums([2,2]))



// var findErrorNums = function(nums) {
    
//     let len = nums.length;
//     let expectedSum = (len*(len+1))/2;
//     let tempSum = 0, actualNum = 0;
    
//     let hash = {};

//     for(let num of nums){
//         if(!hash[num]){
//             hash[num] = true
//             tempSum += num
//         } else {
//             actualNum = num
//         }
//     }
//     console.log(hash, tempSum)
//    return [actualNum, expectedSum - tempSum]  // [ 2, 10-7 ]
// };


var findErrorNums = function(nums) {
    
    let hash = {}
    
    for(const num of nums){
        if(!hash[num]){
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
    
    let dup = -1
    let missing = 1 // starts from 1 because constraint : 1 <= nums[i] <= 104 
    
    for(let i = 1; i <= nums.length; i++){
        if(hash[i]) {
            if(hash[i] == 2) {
                dup = i
            }
        } else {
            missing = i
        }
    }
   
    return [dup, missing]
};
console.log(findErrorNums([1,2,2,4]))