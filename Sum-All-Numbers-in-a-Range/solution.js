const sumAll = (arr) =>  {
  
    // create varibles for max and min 
    let min, max
    
    // define min and max
    if (arr[0] > arr[1]){
        min = arr[1]
        max = arr[0]
    } else {
        min = arr[0]
        max = arr[1]
    }

    // sum all elements in an array

    //create a variable sum equals to 0 to initialize
    let sum = 0

    //looping through
    for(let i=min; i<=max; i++){
       sum += i
    }
    return sum

}
console.log(sumAll([1, 10]))