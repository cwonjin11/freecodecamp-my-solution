
// for optimize time complexity : make it O(n)

function uniteUnique(arr) {

    const arrayOnlyValue = [...arguments]
    const inOneArray = arrayOnlyValue.reduce((acc, currentArray) => {
        return [...acc, ...currentArray]
    },[])

    // => [] => [1,3,2] => [1,3,2,5,2,1,4,] => [1,3,2,5,2,1,4,2,1]
    const output = []

    for(const num of inOneArray){
        if(!output.includes(num)){
            output.push(num)
        }
    }


    return output;

}
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]))