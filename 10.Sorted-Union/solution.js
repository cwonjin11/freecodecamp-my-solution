function uniteUnique(arr) {
    // console.log(arguments)
    //=>Arguments] { '0': [ 1, 3, 2 ], '1': [ 5, 2, 1, 4 ], '2': [ 2, 1 ] }
    // console.log(...arguments)
    // => [ 1, 3, 2 ] [ 5, 2, 1, 4 ] [ 2, 1 ]
    const arrayOnlyValue = [...arguments]
    // console.log(arrayOnlyValue)
    //create variable of output as an empty array
    const output = []


    // quadratic big o notation : O to the n squre = O(n^2)
    for(const arr of arrayOnlyValue){
        for(const element of arr){
            if(!output.includes(element)){
                output.push(element)
            }
        }
    }


    return output;

}
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
  console.log(uniteUnique([1, 2, 3], [5, 2, 1]))