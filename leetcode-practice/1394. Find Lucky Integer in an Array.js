var findLucky = function(arr) {
  
    let hash = {}
    let max = -1
    
    for(const num of arr){
        if(!hash[num]){
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
    
    for(const key in hash) {
        if(Number(key) === hash[key] && hash[key] > max) {
           max = hash[key]
        }
    }
    return max
};

console.log(typeof Number("123"))
console.log(findLucky([2,2,3,4])) // 2
console.log(findLucky([1,2,2,3,3,3])) // 3
console.log(findLucky([2,2,2,3,3])) // -1