var anagramMappings = function(nums1, nums2) {
    
    // create variable output = []
// create hash key=>nums2[i], value =>i
    // loop nums1[i] from hash that matched to key
    // push output array a hash[nums1[i]]
    
    
    let map = {}
    let output = []
    for(let i = 0 ; i < nums2.length; i++){
        map[nums2[i]] = i
    }
    console.log(map)

    for(let i = 0; i < nums1.length; i++){
        // console.log(map[nums1[i]])
        output.push(map[nums1[i]])
    }
    return output

};

// console.log(anagramMappings([12,28,46,32,50], [50,12,32,46,28])) //=> [1,4,3,2,0]
console.log(anagramMappings([40, 40], [40, 40])) //=> [1,4,3,2,0]