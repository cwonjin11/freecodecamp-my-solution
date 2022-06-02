var removeDuplicates = function(nums) {
    //two pointer //[1,1,2]
    let j = 0 //1,2,1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[j]){ //2!==1
            j++ 
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }
    return j + 1
};



var removeDuplicates = function(nums) {
    
    let unique =  [...new Set(nums)]
    for(let i = 0; i < unique.length; i++){
        nums[i] = unique[i]
    }
    
    return unique.length
};