const sumOfUnique = (arr) => {

    let hash = {}
    for(let num of arr){
        !hash[num] ? hash[num] = 1 : hash[num]++
    }

    let result = 0
    for(let key in hash){
        if(hash[key] == 1){
            result += +key
        }
    }

    return result

}



// const burstBalloons = (points) => {

//     let count = 0
//     points.sort((a,b) => a[0] - b[0])
//     let len = points.length
//     let i = 0

//     while( i < len){
//         let left = points[i][0] // 1
//         let right = points[i][1] // 6
//         i++
//         while( i < len && points[i][0] <= right && points[i][1] >= left){
//             // 2 < 6 && 8 > 1
//             // left
//             left = Math.min(left, points[i][0])
//             // right
//             right = Math.min(right, points[i][1])
//              i++
//         }
//        count++
//     }
//     return count

// }

const burstBalloons = (points) => {

   points.sort((a,b) => a[0] - b[0])
   let prev = null
   let count = 0

    for(let el of points){
        let start = el[0]
        let end = el[1]
        // console.log(el)
        if( prev == null || prev < start){
            count++
            prev = end
        } else {
            prev = Math.min(prev, end)
        }
    }
    return count
}

console.log(burstBalloons([[10,16], [2,4], [1,6], [7,12]]))
console.log(burstBalloons([[10,16], [2,8], [1,9], [7,12]]))
console.log(burstBalloons([[10,16]])) //1
console.log(burstBalloons([[1,2], [3,4]])) // 2
console.log(burstBalloons([[1,2], [2,4]])) //1
console.log(burstBalloons([[]])) //0
// console.log(burstBalloons([[2,8], [1,6], [7,12], [3, 5]])) 
