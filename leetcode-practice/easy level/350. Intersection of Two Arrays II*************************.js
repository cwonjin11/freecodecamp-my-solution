var intersect = function(nums1, nums2) {
    
    let hash  = {};
    let result = [];
    
    for(let num of nums1){
        if(!hash[num]){
            hash[num] = 1
        }else{
            hash[num]++
        }
    }
    console.log(hash)
    for(let el of nums2){
        if(hash[el]){
            hash[el]--
            result.push(el)
        }
    }
    console.log(hash)
    return result
    
};