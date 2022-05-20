
// const removeEl = (a,b) => {

//     for(let i = 0; i < a.length; i++){
//        for(let j = 0; j < b.length; j++){
//             if(a[i] == b[j]){
//                a.splice(i,1)
//             }
//        }
//     }
// return a
// }

const removeEl = (a,b) => {

    let result =  a.filter(el => !b.includes(el))
   return result
}

console.log(removeEl([1,2], [1]))
console.log(removeEl([1,2,2], [1]))
console.log(removeEl([1,2,2], []))
console.log(removeEl([1,2,3,4,5,6,7,8], [1,3,5,7]))