const sumPrimes = (num) => {

    //edge case
    // if(num < 2){
    //     return 0
    // }

    const primeNumbers = [];
    for(let i=2; i <= num; i++){
        let isComposite = false
        for( const p of primeNumbers){
            if (i%p === 0){
                isComposite = true
                break
            }
        }
        if (!isComposite) {
            primeNumbers.push(i)
        }
    }
    //refactor using reduce
    //accumulator as a function
    //p is what we are iterating over
    //0 is a default value
    //acc + p is a result 
    let sum = primeNumbers.reduce((acc, p) => acc + p, 0)
    // [2,3,5,7]
    // 0 + 2 = 2
    // 2 + 3 = 5
    // 5 + 5 = 10
    // 10 + 7 = 17
    return sum;
  }
  
  console.log(sumPrimes(10))



  // time complexity => O(n^2) quadratic
  // 1,2,5,7  => 17