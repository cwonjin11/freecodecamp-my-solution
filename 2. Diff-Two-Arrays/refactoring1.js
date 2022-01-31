const diffArray = (arr1, arr2) => {

    const unionArray = new Set([...arr1, ...arr2]); //Set object(new Set) lets you store unique values of any type.
    console.log(unionArray)  // => Set(5) { 1, 2, 3, 5, 4 }

    const solutionArray = []
    for (const currentElement of unionArray)
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)){
            solutionArray.push(currentElement)
        }  else if (arr2.includes(currentElement) && !arr1.includes(currentElement)){
            solutionArray.push(currentElement)
        }
    return solutionArray
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]))