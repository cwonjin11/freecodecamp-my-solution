const sumPrimes = (num) => {

    //edge case
    if(num < 2){
        return 0
    }

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

    // console.log(primeNumbers)

    let sum = 0
    for (const p of primeNumbers){
        sum += p
    }

    return sum;
  }
  
  console.log(sumPrimes(10))



  // time complexity => O(n^2) quadratic
  // 1,2,5,7  => 17