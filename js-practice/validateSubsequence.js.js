/*  Given two non-empty arrays of integers, write a function that determines whether
 the second array is a subsequence of the first one. 
 A subsequence of an array is a set of numbers that aren't necessarily 
 adjacent in the array but that are in the same order as they appear in the 
 array. for instance, the numbers [1, 3,4] form a subsequence of the array [1, 2. 3. 4], 
 and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid
 subsequences of the array*/

/* What is a subsequence? 
a subsequence is a sequence that can be derived from another sequence 
by deleting some or no elements without changing the order of the 
remaining elements. */

/* traverse both array. 
How do we traverse the array? Keep in mind that the order of the element matter 
because it's a "subsequence"
Create a pointer for each array (array & sequence) then Iterate through 
the 1st element in the sequence and array to see if the sequence 1st element matches the 1st element 
in the array. If it is not, then you move the pointer to the next element in the array. 
If you find a match, then move the pointer in the sequence to the next element 
*/


// O(n) Time | O(1) Space
const isValidSubsequence = (array, sequence) => {

    let arrIndex = 0
    let seqIndex = 0

    while(arrIndex < array.length && seqIndex < sequence.length){
        if(array[arrIndex] == sequence[seqIndex]){
            seqIndex++
        }
        arrIndex++
    }

    return seqIndex === sequence.length


}

console.log(isValidSubsequence([1,2,3,4,5], [1,2,4]))