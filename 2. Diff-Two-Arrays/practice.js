
const diffArray = (arr1, arr2) => {

    
    //create variable union array as empty arry to find all elements without duplicate
 const unionArr = []
    //push arr1 if unionArr does not include arr1
    // push arr2 if unionArr does not include arr2
    for( let i=0; i<arr1.length; i++){
        if (!unionArr.includes(arr1[i])){
            unionArr.push(arr1[i])
        }
    }

    for( let i=0; i<arr2.length; i++){
        if(!unionArr.includes(arr2[i])){
            unionArr.push(arr2[i])
        }
    }

    // console.log(unionArr)


    let result = []

    for( let i = 0; i<unionArr.length; i++){
        if(arr1.includes(unionArr[i]) && !arr2.includes(unionArr[i])){
            result.push(unionArr[i])
        } else if( arr2.includes(unionArr[i]) && !arr1.includes(unionArr[i])){
            result.push(unionArr[i])
        }
    }

    return result
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, 2, 3, 5 ,6], [1, 2, 3, 4, 5,7]))