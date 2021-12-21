const diffArray = (arr1, arr2) => {

    const unionArray = [];

    for(const el of arr1){
        if(!unionArray.includes(el)){
            unionArray.push(el)
        }
    }

    for(const el of arr2){
        if(!unionArray.includes(el)){
            unionArray.push(el)
        }
    }


    const solutionArray = []
    // for (let i=0; i<unionArray.length; i++){
    //     const currentElement = unionArray[i]
    for (const currentElement of unionArray)
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)){
            solutionArray.push(currentElement)
        }  else if (arr2.includes(currentElement) && !arr1.includes(currentElement)){
            solutionArray.push(currentElement)
        }
    //}
    return solutionArray
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]))