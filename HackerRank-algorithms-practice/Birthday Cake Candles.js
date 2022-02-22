function birthdayCakeCandles(candles) {
    // Write your code here
    let hash = {}
    for(const num of candles){
        if(hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    // console.log(hash)
    console.log(hash[4])
    if(hash[Math.max(...candles)]){
        return hash[Math.max(...candles)]
    }
    
}
console.log(birthdayCakeCandles([4,4,1,3]))