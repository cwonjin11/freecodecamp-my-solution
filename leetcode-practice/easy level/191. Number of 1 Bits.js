var hammingWeight = function(n) {
    let hash = {}
    let arr = n.toString(2).split("")
    
    for(const num of arr){
        if(!hash[num]){
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
    for(let num in hash){
        if(num == 1){
            return hash[num]
        } 
    }
    return 0
};
console.log(hammingWeight(00000000000000000000000000001011))
//or

var hammingWeight1 = function(n) {

    let arr = n.toString(2).split("") // return [1,0,1,1]
   return arr.reduce( (acc, curr) => Number(acc) + Number(curr)) //return 1 + 0 + 1 + 1
   
};
console.log(hammingWeight1(00000000000000000000000010001011))
