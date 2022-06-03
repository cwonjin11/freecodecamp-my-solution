function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIndex = 0
    let seqIndex = 0
    while(arrIndex < array.length && seqIndex < sequence.length){
      if(array[arrIndex] === sequence[seqIndex]){
        seqIndex++
      }
      arrIndex++
    }
    return seqIndex === sequence.length
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10]))
console.log(isValidSubsequence([5,1,22,25,6,8,10], [1,6,-1,10]))