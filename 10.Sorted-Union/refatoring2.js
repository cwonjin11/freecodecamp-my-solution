// Use Set 

function uniteUnique(arr) {

    const arrayOnlyValue = [...arguments]
    const inOneArray = arrayOnlyValue.reduce((acc, currentArray) => {
        return [...acc, ...currentArray]
    },[])

    const set = new Set(inOneArray)

    // return Array.from(set)
    return [...set]
    // console.log(set)


}
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]))