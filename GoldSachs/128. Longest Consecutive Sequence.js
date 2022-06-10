

var longestConsecutive = function(nums) {
  //edge case: no length or nums is null
  if(nums.length === 0 || nums == null) return 0
  
  let set = new Set(nums)
  console.log(set)
  //main function
 
  let max = 0

  for(const num of nums){
      if(set.has(num - 1)){
          continue
      }
      let currNum = num
      let currMax = 1

      while(set.has(currNum + 1)){
          currNum++
          currMax++
      }
      max = Math.max(max, currMax)
  }
  return max

}

// console.log(longestConsecutive([100,4,200,1,3,2]))


var longestConsecutive = function(nums) {
  
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
  
  let set = new Set(nums)
  let longest = 0
  
  for( let num of nums){
      if(!set.has(num-1)){ // set the starting point
          let length = 0
          while(set.has(num + length)){
              length++
          }
      longest = Math.max(longest, length)
      }   
  }
  return longest
};

