

function selectionSort(arr){

    let min = Math.min(...arr)
    arr.pop(min)
    arr.unshift(min)

    return arr
}

console.log(selectionSort([64,25,12,22,11])) //[11,64,25,12,22]