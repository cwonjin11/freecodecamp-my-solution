var solution = function(isBadVersion) {
    
    // return function(n) {
    // convert to arrow function
    return (n) => {
        
        let left = 1
        let right = n
        
        while (left < right){
            let mid = Math.floor( (left + right) / 2)
            if(isBadVersion(mid)){
                right = mid 
            } else {
                left = mid + 1
            }
        }
         return right //or return left either way works
    }
}