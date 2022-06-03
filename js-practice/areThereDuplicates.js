/*
Implement a function called, areThereDuplicates which accepts a vaiable number of
arguments passed in. You can solve this using the frequency counter pattern OR
the multiple pointers pattern. 
*/

/*
for examples: 
areThereDuplicates(1,2,3) // false 
areThereDuplicates(1,2,2) //true 
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

//solution 1: Using Frequency Counter pattern
function areThereDuplicates(...arg) {
  
    let hash = {}
   for(const num of arg){
    if(!hash[num]){
        hash[num] = 1
    } else {
        hash[num]++
    }
   }
   
   for(let key in hash){
       if(hash[key] > 1){
           return true
       }
   }
   return false
}

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true