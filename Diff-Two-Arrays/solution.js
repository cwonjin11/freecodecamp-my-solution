const diffArray = (arr1, arr2) => {

    const unionArray = [];

    for(let i=0; i < arr1.length; i++){
        if(!unionArray.includes(arr1[i])){
            unionArray.push(arr1[i])
        }
    }

    for(let i=0; i < arr2.length; i++){
        if(!unionArray.includes(arr2[i])){
            unionArray.push(arr2[i])
        }
    }


    const solutionArray = []
    for (let i=0; i<unionArray.length; i++){
        const currentElement = unionArray[i]
        if (arr1.includes(currentElement) && !arr2.includes(currentElement)){
            solutionArray.push(currentElement)
        }  else if (arr2.includes(currentElement) && !arr1.includes(currentElement)){
            solutionArray.push(currentElement)
        }
    }
    return solutionArray
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, 2, 3, 5 ,6], [1, 2, 3, 4, 5,7]))

//[4]

