var findDisappearedNumbers = function(nums) {
  
    let hash = {}
    
    for(let i = 0; i < nums.length; i++){
        hash[nums[i]] = true  // if setting value with i, index 0 will be equals to not exist
    }
    
    let result = []
    for (let i = 1; i <= nums.length; i++){
        if(!hash[i]){  // we need to make hash[nums[i]] = true  not  = i 
            result.push(i)
        }
    }
    return result
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])) //[5,6]
console.log(findDisappearedNumbers([1,1]))//[2]