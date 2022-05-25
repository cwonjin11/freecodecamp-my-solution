var lastStoneWeight = function(stones) {
    
    while(stones.length > 1){
        stones.sort((a,b) => a - b)
        let x = stones.pop()
        let y = stones.pop()
    
        if(x != y){
            stones.push(x - y)
        }
    }
    return stones.length ? stones[0] : 0
    
};

console.log(lastStoneWeight([2,7,4,1,8,1]))  // 1
console.log(lastStoneWeight([1]))  // 1
console.log(lastStoneWeight([2,2]))  // 0

//recursive
var lastStoneWeight = function(stones) {
    if(stones.length < 2) return stones
    stones.sort((a,b) => a-b)
    let a = stones.pop()
    let b = stones.pop()
    stones.push(a-b)
    return lastStoneWeight(stones);
};





