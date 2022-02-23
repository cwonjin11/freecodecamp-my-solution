var twoOutOfThree = function(nums1, nums2, nums3) {
    let flattenedArray = [...nums1, ...nums2, ...nums3]
    let set = new Set(flattenedArray)
    
    // console.log(set)
    for(const num of set){
            set[num] = 1
    } 
    console.log(set)
    
    let output = []
    for(const num in set) {
        if( nums1.includes(Number(num)) && nums2.includes(Number(num)) || nums1.includes(Number(num)) && nums3.includes(Number(num)) ||  nums2.includes(Number(num)) && nums3.includes(Number(num)) ) {
    //    output.push(num)
        set[num]++
            if(set[num] > 1){
                output.push(num)
            }
        }  
        
    }
   return output

};

console.log(twoOutOfThree([1,1,3,2],[2,3],[3]))
console.log(twoOutOfThree([3,1],[2,3],[1,2]))