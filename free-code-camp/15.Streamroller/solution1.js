// not accepted by free code camp. Use solution2 

function steamrollArray(arr) {
    let output = []

    const flattenArray = arr.flat(Infinity)
    return flattenArray
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([[["a"]], [["b"]]])) //should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) //should return [1, {}, 3, 4].