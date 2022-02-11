

var maxProfit = function(prices) {
    


    let result = 0
    let min = prices[0]
    for( let i=0; i < prices.length; i++){
        min = Math.min(prices[i], min)
        result = Math.max(prices[i] - min, result)
    }
    return result
    
    //brute force O(n^2)
//     for (let i = 0; i < prices.length; i++){
//         for (let j = i+1; j < prices.length; j++){
//                let max = prices[j] - prices[i]
//             if( max > result && prices[i] < prices[j]){
//                     result = max
//                 }
//             }

//         }
//     return result
};


console.log(maxProfit([7,1,5,3,6,4]))