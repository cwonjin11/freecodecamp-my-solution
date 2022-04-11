function mul(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
        }     
    }
}
console.log("output with normal function", mul(2)(4)(6));

navigator.geolocation.getCurrentPosition(function getPosition(position){
  console.log(position.coords.latitude)
  // console.log(position.coords.longitude)
})


//write a program to remove duplicate item from array

// const arr = [1,2,3,4,1,2]

// const removeDupe = (arr) => {

//   // let mySet = new Set(arr)
//   let hash = {}
//     for(let num of arr){
//       if(!hash[num]){
//         hash[num] = 1
//       } else {
//         hash[num]++
//       }
//     }

//     let output = []
//     for(const key in hash){
//         if(hash[key] == 1)
//         output.push(key)
//     }
//     return output.reduce((acc,curr) => Number(acc) + Number(curr))
//     // return [...mySet]
// }

// console.log(removeDupe(arr = [1,2,3,4,1,2]))
// console.log(removeDupe(arr = [1,2,3,4,1,2,1,2,1,2]))
