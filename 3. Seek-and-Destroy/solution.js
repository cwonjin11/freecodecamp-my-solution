
function destroyer(arr) {
    console.log(arr)
    //=> [ 1, 2, 3, 1, 2, 3 ]

    const argsArray = [...arguments].slice(1)
    console.log(argsArray)
    //=> [ 2, 3 ]

    const filteredArray = []

    for(let i=0; i<arr.length; i++){
        if (!argsArray.includes(arr[i])){
            filteredArray.push(arr[i])
        }
    }

    return filteredArray

}
function findFirstDuplicate(arr) {
    const uniques = new Set();
  
    for (const value of arr) {
      if (uniques.has(value)) {
        return value;
      }
  
      uniques.add(value);
    }
  
    return -1;
  }

  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));