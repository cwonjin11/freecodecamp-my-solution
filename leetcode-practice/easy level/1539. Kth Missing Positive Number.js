var findKthPositive = function(arr, k) {
    
    let missing = []

    for(let i = 1; i <= arr.length + k; i++){
       if(!arr.includes(i)){
         missing.push(i)
       }
    }
    return missing[k-1]
   

};

console.log(findKthPositive([2,3,4,7,11], 5)) // => 9