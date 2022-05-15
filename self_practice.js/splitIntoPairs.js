
const splitIntoPairs = (str) => {

    let result = []
    let arr = str.split("")

   
    if(arr.length == 1) {
        arr.push("_")
    }

    while(arr.length > 1){
        let first2 = arr.splice(0,2)
        result.push(first2.join(""))
        if(arr.length == 1){
            arr.push("_")
        }
   }
   return result
}

console.log(splitIntoPairs("abcde")) //=>["ab", "cd", "e_"]
console.log(splitIntoPairs("abcdef")) //=>["ab", "cd", "e_"]
console.log(splitIntoPairs("abc")) //=>["ab", "cd", "e_"]
