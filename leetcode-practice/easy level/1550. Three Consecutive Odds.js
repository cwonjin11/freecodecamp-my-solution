var threeConsecutiveOdds = function(arr) {
    
    let counter = 0
    for(let num of arr){
        if(num % 2 !== 0){
            counter++
        } else {
            counter = 0
        }
        if(counter === 3) return true  
    }
    
    return false
    
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])) // true
console.log(threeConsecutiveOdds([2,6,4,1])) // false