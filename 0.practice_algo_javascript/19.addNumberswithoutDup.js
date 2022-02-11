function sumUniq(nums) {
    const hashMap = {};
    let sum = 0;
  
    for (let element of nums) {
      if (!hashMap[element]) {
        hashMap[element] = 1;
      } else {
        hashMap[element]++;
      }
    }
  
    for (let obj in hashMap) {
      if (hashMap[obj] === 1) {
        //   console.log(obj)
        sum += parseInt(obj)
      }
    //   console.log(hashMap)
    }
  
    return sum;
 }

console.log(sumUniq([1, 2, 3, 2, 2]))
console.log(sumUniq([1, 1, 3, 2, 2]))
console.log(sumUniq([1, 1, 3, 2, 5, 6, 1]))