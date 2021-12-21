

// Note that arrow functions don't use arguments key word
// arrow funtion wants you to use spread operator to access all arguments

const destroyer = (...arr) => {

    const argsArray = [...arr].slice(1)
    return arr[0].filter( el => !argsArray.includes(el))
}


  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 1));