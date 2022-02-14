function destroyer(arr) {

    const argsArray = [...arguments].slice(1)


    //using built in filter method
    //how to read: if argsArray does not include element, then filter it in(meaning 'keep it')
    // const filteredArray = arr.filter( el => !argsArray.includes(el))
    // return filteredArray

    return arr.filter( el => !argsArray.includes(el))
}


  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 1));