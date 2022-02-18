// Add all numbers from a given array that has only appears once
//for example [1,2,3,4,2] will give an output of 8 because 2 is a dupe.

function addNumbers(nums){
    const hashMap = {}
    let sum = 0

    for(let el of nums){  // to iterate over values of the object
        if(!hashMap[el]){
            hashMap[el] = 1
        } else {
            hashMap[el]++
            console.log(hashMap)
        }
    }

    for(let num in hashMap){  //to iterate over keys on the object
        if(hashMap[num] === 1){
            sum += parseInt(num)
        }
    }
    return sum

}

console.log(addNumbers([1, 2, 3, 4, 2]))