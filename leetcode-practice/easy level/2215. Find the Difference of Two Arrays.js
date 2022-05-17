
var findDifference = function(nums1, nums2) {
    
    let set1 = [...new Set(nums1)]
    let set2 = [...new Set(nums2)]
    
    let output = [ [], [] ]
    
    for(const num of set1){
        if(!set2.includes(num)){
            output[0].push(num)
        }
    }
    for(const num of set2){
        if(!set1.includes(num)){
            output[1].push(num)
        }
    }
    
    return output
};



// or

var findDifference = function(nums1, nums2) {
    
    let set1 = [...new Set(nums1)]
    let set2 = [...new Set(nums2)]
    
    let resultA = []
    let resultB = []
    
    for(const num of set1){
        if(!set2.includes(num)){
            resultA.push(num)
        }
    }
    for(const num of set2){
        if(!set1.includes(num)){
            resultB.push(num)
        }
    }
    
    return[ resultA, resultB ]
   
}


//or
var findDifference = function(nums1, nums2) {
    
    let resultA = []
    let resultB = []
    
    for(const num of nums1){
        if(!nums2.includes(num)){
            resultA.push(num)
        }
    }
    for(const num of nums2){
        if(!nums1.includes(num)){
            resultB.push(num)
        }
    }
    
    return[ [...new Set(resultA)], [...new Set(resultB)] ]
   
    
};
