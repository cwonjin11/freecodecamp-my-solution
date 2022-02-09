
function twoSum(nums, target) {

    let numbers = {}
    for (let i = 0; i < nums.length; i++){
        let targetedNumber = target - nums[i]
        if (targetedNumber in numbers){
            return [numbers[targetedNumber], i]
        } else {
            numbers[nums[i]] = i
        }
    }
    return []
}


console.log(twoSum([2,7,11 ,15], 17))