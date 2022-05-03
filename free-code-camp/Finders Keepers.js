// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.



function findElement(arr, func) {

    return arr.find(el => func(el))
  
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);


// more readable (coherent)
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);