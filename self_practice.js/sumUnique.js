

const sumOfUniq = (arr) => {

   let hash = {}
   for(const num of arr){
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

console.log(sumOfUniq([1,2,2,3])) 
console.log(sumOfUniq([1,2,2,2,3,4]))
console.log(sumOfUniq([1,2,2,2,3,3,4]))