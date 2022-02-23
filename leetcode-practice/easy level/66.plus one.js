var plusOne = function(digits) {
    
    for(let i=digits.length-1; i > -1; i--){
        digits[i]++
        // console.log(digits[i], '1')
        if (digits[i] > 9) {
            digits[i] = 0 
            // console.log(digits)
        } else {
            // console.log(digits)
            return digits
        }
    }
       digits.unshift(1)
       return digits
};

   console.log(plusOne([1,2,3]))
//    console.log(plusOne([[4,3,2,1]]))
//    console.log(plusOne([[9]]))