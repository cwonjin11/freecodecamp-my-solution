// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

// function chunkArrayInGroups(arr, size) {

//     let result = []
//     while(arr.length > 0){
//         // console.log(arr.splice(0,size))
//         result.push(arr.splice(0,size))
//         // console.log(arr.splice(0,size))
//     }
//     console.log(result)
// }

function chunkArrayInGroups(arr, size) {

    let result = []
    for(let i = 0; i < arr.length; i+=size){
        result.push(arr.slice(i, i+size))
    }
    return result
}


chunkArrayInGroups(["a", "b", "c", "d"], 1); // [[a,b], [c,d]]