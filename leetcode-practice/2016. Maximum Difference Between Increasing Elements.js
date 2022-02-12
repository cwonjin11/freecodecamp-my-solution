var maximumDifference = function(nums) {
    
    let result = -1
    
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
             let differ = nums[j] - nums[i]
             if(i<j && nums[i] < nums[j] && differ > result){
                result = differ
            }
        }
    }
    return result
};


