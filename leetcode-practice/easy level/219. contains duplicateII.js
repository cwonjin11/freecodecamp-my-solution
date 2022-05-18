var containsNearbyDuplicate = function(nums, k) {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hash && i- hash[nums[i]] <= k){
            return true
        }
        hash[nums[i]] = i
    }
    return false
};

//or 

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
  		if (map.has(nums[i]) && (i - map.get(nums[i]) <= k)) return true
		map.set(nums[i], i);				   
    }
    return false
};