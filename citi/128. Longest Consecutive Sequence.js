/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/



// console.log(longestConsecutive([100,4,200,1,3,2]))

var longestConsecutive = function(nums) {
  //edge case: no length or nums is null
  if(nums.length === 0 || nums === null) return 0
  
  let set = new Set(nums) // remove dulicated number
  let max = 0
  
  for(let num of nums){
    //we need to find the starting point. if set does not have num - 1, that is our starting point
    if(!set.has(num - 1)){ //set the starting point here
        let curr = 0
        while(set.has(num)){ // increment num by 1 while set has num // question? n^2 time complexitiy?
            num++
            curr++
        }
    max = Math.max(curr, max)
    }
  }
  return max
};


var longestConsecutive = function(nums) {
  //edge case: no length or nums is null
  if(nums.length === 0 || nums == null) return 0
  
  let set = new Set(nums)
  let max = 0
  
  for( let num of nums){
      if(!set.has(num-1)){ // set the starting point
          let currMax = 0
          while(set.has(num++)){
              currMax++
          }
      max = Math.max(max, currMax)
      }  
  }
  return max
  
};




var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;  // make sure starting from the beginning of sequence

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
};