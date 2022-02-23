
var numJewelsInStones = function(jewels, stones) {

    console.log(jewels, stones)

    let map = {}
    let count = 0

    for(const char of jewels){
        map[char] = true
    }
    // console.log(map) ==> { a: true, A: true }

    for(const char of stones){
        if(map[char]){
            count++
        }
    }
    return count
}

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3
console.log(numJewelsInStones("z", "ZZ")) // 0
console.log(numJewelsInStones("zZaB", "aAAbbBbbzZZ")) // 5