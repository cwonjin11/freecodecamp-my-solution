var anagramMappings = function(nums1, nums2) {
    
    // One liner solution using map
    // return (nums1.map(num => nums2.indexOf(num)))

    // using hashmap
    let hash = {}
    for(const num of nums2){
        if(!hash[num]){
            hash[num] = nums2.indexOf(num)
        }
    }
    let output = []
    for(const num of nums1){
        output.push(hash[num])
    }
    return output

    // let map = {}
    // let output = []
    // for(let i = 0 ; i < nums2.length; i++){
    //     map[nums2[i]] = i
    // }
    // console.log(map)

    // for(let i = 0; i < nums1.length; i++){
    //     // console.log(map[nums1[i]])
    //     output.push(map[nums1[i]])
    // }
    // return output

};

// console.log(anagramMappings([12,28,46,32,50], [50,12,32,46,28])) //=> [1,4,3,2,0]
console.log(anagramMappings([40, 40], [40, 40])) //=> [1,1] or [0,0] whatever