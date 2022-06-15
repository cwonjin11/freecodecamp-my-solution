// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// nums[i] - nums[j] == k
// Notice that |val| denotes the absolute value of val.

 

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function (nums, k) {
	let map = {}
	let count = 0

	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = (map[nums[i]] || 0) + 1;
	}

	//loop through keys.In this case keys will be unique as they have the frequency of their occurrences
	Object.keys(map).forEach((key) => {
		/* Now we need to check if target k is 0 or not 
		because in case k is 0 then only possible combination to get 
		difference 0 will be when same num appear twice i.e 
		1-1=0 ,here 1 count has to be 2 in map to get diff 0
		*/
		if (k !== 0) {
			/* 
			it is given that |a-b|=k
			so a=k+b i.e secondNum=k+key
			Since object stores key as string so we have to typecast it to integer
			and +k is shorthand of parseInt(k)
			so we can write  parseInt(k)+parseInt(key) as
			+k + +key (make sure there is space between +/add operator)
			*/
			let secondNum = +k + +key;
			if (map[secondNum] !== undefined) {
				count++;
			}
		} else {
			/*So when k is 0 we check is num count is greater or equal
			 to 2 because then only we will get difference of these two as 0
			 */
			if (map[key] >= 2) count++;
		}
	});
	return count;
};
