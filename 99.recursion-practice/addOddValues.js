


const collectOddValues = (arr) => {
    let result = []
    const recursiveHelper = (helperArr) => {
        if(helperArr.length === 0) return
        if(helperArr[0] % 2 === 0){
            result.push(helperArr[0])
        }
        recursiveHelper(helperArr.slice(1))
    }
    recursiveHelper(arr)
    return result 
}


console.log(collectOddValues([0,1,2,3,4,5,6,7,8,9,10]))