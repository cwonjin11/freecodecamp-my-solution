function maxPoints(elements) {
    // Write your code here
    let sum = []
    
    for(let n of elements){
        sum[n] = sum[n] ? sum[n] += n : n
    }

    for(let i = 2; i < sum.length; i++){
        sum[i] = Math.max(sum[i-1]||0, (sum[i]||0) + (sum[i-2]||0) )
    }
    
    return sum[sum.length - 1]

}

// [5,6,6,4,11] => 27
// [5,6,6,4,1] => 17