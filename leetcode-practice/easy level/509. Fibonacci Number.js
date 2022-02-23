var fib = function(n) {
    
    let firstTwo = [0, 1]
    
    if( n < 2 ){
        return n
    }
    
    for(let i = 0; i < n-1; i++){
        let sum = firstTwo[0] + firstTwo[1]
        firstTwo = [firstTwo[1], sum]
    }
    
    return firstTwo[1]
    
};

console.log(fib(9)) //34
 //  0. 1  2. 3. 4. 5. 6. 7.  8.  9
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...