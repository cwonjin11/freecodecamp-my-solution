const dropElements = (arr, func) => {


    //use findIndex method
    // find index in the array that satisfied provided testing function 
    let trueIndex = arr.findIndex(func)

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