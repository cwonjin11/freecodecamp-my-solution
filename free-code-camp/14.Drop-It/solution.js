function dropElements(arr, func) {

    // set truIndex as a variable and initialize it as -1
    // going to look for an index of array to use slice method at the end
    let trueIndex = -1

    // use traditional for loop to check truthy value of an array
    for (let i=0; i < arr.length; i++){
        // if the function is true, set trueIndex as current index which is i
        if(func(arr[i]) === true){
            trueIndex = i
            break //and break
        }
    }
    console.log(trueIndex)

    //if function is always false, return empty array
    if(trueIndex === -1){
        return []
        //else return sliced array that function is true
    }else{
        return arr.slice(trueIndex)
    }

  }
  
//   console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))
//   console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
//   console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
  console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))