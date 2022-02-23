
// var buildArray = function(nums) {

//     let result = []

//     for(let i = 0; i < nums.length; i++){
//         result[i] = nums[nums[i]]
//     }
//     return result

// };

var buildArray = function(nums) {
    let ans = nums.map(i => nums[i]);


    return ans
};


console.log(buildArray([0,2,1,5,3,4])) // [0,1,2,4,5,3]
                                           //nums[nums[0]], nums[nums[1]], nums[nums[2]]... nums[nums[5]]
                                           //nums[0],  nums[1], nums[2], .... nums[3] 
                                           //0, 1, 2, ... 3