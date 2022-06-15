// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]



/// before start!!!!!!!!! important to think about this way!!!
//nums = [1,2,3,4]
//left = [1,1,2,6]
//right = [24,12,4,1]
//result = [24,12,8,6]


var productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(0)
    left[0] = 1
    let right = new Array(nums.length).fill(0)
    right[right.length - 1] = 1

    for(let i = 1; i < left.length; i++){
        left[i] = left[i - 1] * nums[i - 1]
    }
    console.log(left)
    for(let i = right.length - 2; i >= 0; i--){
        right[i] = right[i + 1] * nums[i + 1]
    }
    console.log(right)
    
    for(let i = 0; i < nums.length; i++){
        nums[i] = left[i] * right[i]
    }
    return nums
};



const productExceptSelf = (nums) => {

    let leftProduct = []
    let rightProduct = []
    let result = []

    for(let i = 0; i < nums.length; i++){
        if(leftProduct.length == 0){
            leftProduct.push(1)
        } else {
            leftProduct.push(leftProduct[i-1] * nums[i - 1])
        }
    }
    console.log(leftProduct)

    for(let i = nums.length -1; i > -1; i--){
        if(rightProduct.length == 0){
            rightProduct.push(1)
            // console.log(rightProduct)
        } else {
            rightProduct.unshift(rightProduct[0] * nums[i + 1])
            console.log(rightProduct)
        }
    }
    console.log(rightProduct)

    for(let i = 0; i < leftProduct.length; i++){
        result.push(leftProduct[i] * rightProduct[i])
    }

    return result
}

// console.log(productExceptSelf([1,2,3,4])) //=> [24,12,8,6]


// Time Limit Exceeded 
var productExceptSelf1 = function(nums) {
    let copied = nums.slice()
    let result = []
    let i = 0
    while(nums){
        copied.splice(i,1)
        console.log(copied[i])
            // console.log(copied, "copied")
        result.push(copied.reduce((acc, curr)=> acc * curr, 1))
        i++
        copied = [...nums]
        
        if(i > nums.length - 1) break
    }
   

    return result

};

console.log(productExceptSelf1([1,2,3,4]))