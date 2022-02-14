function plusMinus(arr) {
    // Write your code here
 let positive = 0
 let negative = 0
 let zero = 0

 let result = [0,0,0]
    for(let i=0; i < arr.length; i++){
        if (arr[i] > 0){
            positive++
            result[0] = (positive/arr.length).toFixed(6)
        } else if (arr[i] < 0) {
            negative++
            result[1] = (negative/arr.length).toFixed(6)
        } else {
            zero++
            result[2] = (zero/arr.length).toFixed(6)
        }
    }

    return result
    
}

console.log(plusMinus([1,1,0,-1,-1])) //=> [ '0.400000', '0.400000', '0.200000' ]