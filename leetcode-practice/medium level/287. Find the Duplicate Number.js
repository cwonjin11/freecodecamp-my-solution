var findDuplicate = function(nums) {
    let set = new Set()
    for(let num of nums){
        if(set.has(num)){
            return num
        }
        set.add(num)
    }
    
};