/*Write a function called sumZero which accepts 
a sorted array of integers. The function should find the first pair 
where the sum is 0. Return an array that includes both values that 
sum to zero or undefined if a pair does not exist */


const sumZero = (arr) => {

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [i,j]
            }
        }
    }
    return undefined
}

// refactor: time complexity O(n), space complexity O(1)
const sumZero1 = (arr) => {

    let left = 0
    let right = arr.length - 1
    if(arr[left] > 0 ) return undefined
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == 0){
            return [left, right]
        } else if(sum < 0){
            left++
        } else {
            right--
        }
    }
}



// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,5]))
console.log(sumZero1([-4,-3,-2,-1,0,1,2,3,5]))