var twoSum = function(nums, target) {


    let hash = {}
    for(let i = 0; i < nums.length; i++){
        let targetedNum = target - nums[i]
        if(targetedNum in hash){
            return [ hash[targetedNum], i ]
        }
        hash[nums[i]] = i
    }

}

console.log(twoSum(nums = [2,7,11,15], target = 9)) //[0 , 1]