//brute force way but much readable
var smallerNumbersThanCurrent = function(nums) {
    
    let res = []
    for(let i = 0; i < nums.length; i++){
        let count = 0 
        for(let j = 0 ; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++
            }
        }
        res.push(count)
    }
    return res
};


//more efficient
var smallerNumbersThanCurrent = function(nums) {
    
    let result = []
    let arr = [...nums]
    nums.sort((a,b) => a-b)
    
    for(let i = 0; i < arr.length; i++){
        result.push(nums.indexOf(arr[i]))
    }
    return result
};


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))//[4,0,1,1,3]