// var topKFrequent = function(nums, k) {
    
        
//         const freqMap = new Map();
//         const bucket = [];
//         const result = [];
        
//         for(let num of nums) {
//             freqMap.set(num, (freqMap.get(num) || 0) + 1);
//         }
//         // console.log(freqMap)
        
//         for(let [num, freq] of freqMap) { // can iterate over key,values of hash
//             bucket[freq] = (bucket[freq] || new Set()).add(num);
//         }
//         console.log(bucket,"bucket")
        
//         for(let i = bucket.length-1; i >= 0; i--) {
//             if(bucket[i]) result.push(...bucket[i]);
//             if(result.length === k) break;
//         }
//         return result;
       
//     };


var topKFrequent = function(nums, k) {
    
    let hash = {}
    for(let num of nums){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }
    // console.log(hash)

    let bucket = []   // bucket = [ [], [], [], [], [], [], [] ]
    for(let i = 0; i <= nums.length; i++){
        bucket.push([])
    }
    // console.log(bucket)
    
    for(let key in hash){  // [ [], [ '3' ], [ '2' ], [ '1' ], [], [], [] ]
        let count = hash[key]
        bucket[count].push(key)
    }
    // console.log(bucket)
    
    let result = []
    for(let i = bucket.length - 1; i >= 0; i--){ // iterate backward to find last k elements from the array
        if(bucket[i]) result.push(...bucket[i]) // or  if(bucket[i].length !== 0)
        // console.log(result,"result")
        if(result.length === k) break;
    }
    return result

};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))