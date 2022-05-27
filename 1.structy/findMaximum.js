

//Time : O(n)
//Space : O(1)
const findMaximum = (nums) => {
    let maximum = -Infinity
    for(let num of nums){
        if(num > maximum){
            maximum = num
        }
    }
    return maximum
}

console.log(findMaximum([1,2,3,4,5,8,9,100])) // 100
