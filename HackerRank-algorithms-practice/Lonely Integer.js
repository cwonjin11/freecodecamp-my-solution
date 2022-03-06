// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    let hash = {}
    
    for(const num of a){
        if(!hash[num]) hash[num] = 1
        else hash[num]++
    }
    // console.log(hash)
    
    for(const key in hash){
        if(hash[key] === 1){
            return key
        }
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1])) // 4