const sumFibs = (num) => {
  
    let a = 1
    let b = 1
    let sum = a

    while(b<=num){
        if(b%2 !== 0){
             sum += b
        }
        
        let temp = b
        b = a + b
        a = temp  // not a = b because I want the old value of b    
        //or [a,b] = [b, a+b]
    }
    return sum
}
  

    //1,1,2,3 => 1,1,3 => 5


  console.log(sumFibs(4));          
  console.log(sumFibs(1000));
  console.log(sumFibs(4000000));    
  console.log(sumFibs(75024));
  console.log(sumFibs(75025));


  /*
  5
1785
4613732
60696
135721
   */

