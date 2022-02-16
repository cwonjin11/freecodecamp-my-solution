var getConcatenation = function(nums) {
    
    // let ans = []

    // for(let i = 0; i < nums.length; i++){
    //     ans.push(nums[i])
    // }
    // return ans.concat(ans)

    const ans = [];

    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[i];
        ans[i+nums.length] = nums[i]
        console.log(ans)
    };
    return ans;

};

console.log(getConcatenation([1,2,1])) //=> [1,2,1,1,2,1]