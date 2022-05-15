
// const splitIntoPairs = (str) => {

//     let result = []
//     let arr = str.split("")

   
//     if(arr.length == 1) {
//         arr.push("_")
//     }

//     while(arr.length > 1){
//         let first2 = arr.splice(0,2)
//         result.push(first2.join(""))
//         if(arr.length == 1){
//             arr.push("_")
//         }
//    }
//    return result
// }

const splitIntoPairs = (str) => {

    let i = 0
    let result = []

    if(str.length % 2 !== 0){
       str += "_"
    }
    // console.log(str)
    
    while(i < str.length){
        result.push(str[i] + str[i+1])
        i = i + 2
    }
    
    return result
}


console.log(splitIntoPairs("abcde")) //=>["ab", "cd", "e_"]
// console.log(splitIntoPairs("abcdef")) //=>
// console.log(splitIntoPairs("abc")) //=>
