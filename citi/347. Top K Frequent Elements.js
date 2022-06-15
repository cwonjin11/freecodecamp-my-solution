
var topKFrequent = function(nums, k) {
    
    let hash = {}
    for(let num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
    
    let arr = []
    for(let key in hash){
        arr.push([key, hash[key]])
    }
    arr.sort((a,b) => b[1] - a[1])
   
    let result = []
    for(let el of arr){
        result.push(el[0])
        if(result.length == k) break
    }
    
    return result
};



//bucket sort
var topKFrequent = function(nums, k) {
    
    let hash = {}
    for(let num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
    // console.log(hash)

    //bucket sort : index = hash[key] meaing frequency
    let bucket = []   // bucket = [ [], [], [], [], [], [], [] ]
    for(let i = 0; i <= nums.length; i++){
        bucket.push([])
    }
    // console.log(bucket)
    
    for(let key in hash){  // [ [], [ '3' ], [ '4' ], [ '2' ], [1], [], []... ]
        let count = hash[key]
        bucket[count].push(key)
    }
    console.log(bucket, "bucket")
    
    let result = []
    for(let i = bucket.length - 1; i >= 0; i--){ // iterate backward to find last k elements from the array
        if(bucket[i]) result.push(...bucket[i]) // or  if(bucket[i].length !== 0)
        // console.log(result,"result")
        if(result.length === k) break;
    }
    return result

};
// console.log(topKFrequent([1,1,1,1,2,2,2,3,4,4],2)) // {1:4, 2:3, 3:1, 4:2} => [[],[3],[4],[2],[1],[],[]...]

// or not using bucket
// convert hash to array and then sort the elements of array by its frequency.
//return kth top frequency


var topKFrequent2 = function(nums, k) {
    let hash = {}
    for(let num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
    console.log(hash)

    let arr = []
    // for(const [key, value] of Object.entries(hash)){
    //     arr.push([+key, value])
    // }
    for(let key in hash){
        arr.push([+key, hash[key]])
    }

    //sorting the arr by its frequency with decreasing order
    arr.sort((a,b) => (b[1] - a[1]))

    let result = []
    for(let i = 0; i < k; i++){
        result.push(arr[i][0]) //push its "key" only 
    }
    return result
}

console.log(topKFrequent2([1,1,1,2,2,3], 2))
// console.log(topKFrequent2([1], 1))