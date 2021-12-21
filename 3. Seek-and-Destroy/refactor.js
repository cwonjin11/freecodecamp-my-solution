
function destroyer(arr) {

    const argsArray = [...arguments].slice(1)

    const filteredArray = []

    for(const el of arr){
        if (!argsArray.includes(el)){
            filteredArray.push(el)
        }
    }

    return filteredArray

}


  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 1));