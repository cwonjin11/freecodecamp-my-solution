var countKDifference = function(nums, k) {
    
    
    let result = 0
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k){
                result++
            }
        }
    }
    return result
    

};


var countKDifference = function(nums, k) {
    let hash = {}

    for(let num of nums) {
        hash[num] ? hash[num]++ : hash[num] = 1 
    }
    // console.log(hash)
    
    let pair = 0
    
    for(let i = 0; i<nums.length; i++) {
        if(hash[nums[i]-k]) {
            pair += hash[nums[i] - k] //value of hash that matches
            console.log(hash[nums[i] - k])
        }
    }

    return pair;
}