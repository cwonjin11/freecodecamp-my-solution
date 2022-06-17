

const findTheFirstPositiveInteger = (arr) => {

  let set = [...new Set(arr)]

  let num = 1

    for(let i = 0; i < arr.length; i++){
        if(set.includes(i)){
            i++
            num++
        }
    }
  return num

}

console.log(findTheFirstPositiveInteger([1,2,2,3,5,7])) // 4