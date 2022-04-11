// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// mutation(["hello", "hey"]) should return false.

// mutation(["hello", "Hello"]) should return true.

// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

// mutation(["Mary", "Army"]) should return true.

// mutation(["Mary", "Aarmy"]) should return true.

// mutation(["Alien", "line"]) should return true.

// mutation(["floor", "for"]) should return true.

// mutation(["hello", "neo"]) should return false.

// mutation(["voodoo", "no"]) should return false.

// mutation(["ate", "date"]) should return false.

// mutation(["Tiger", "Zebra"]) should return false.

// mutation(["Noel", "Ole"]) should return true.


//my approach
// function mutation(arr) {
 
//     let firstElement = arr[0].toLowerCase().split("")
//     let SecondElement = arr[1].toLowerCase().split("")
   
//    console.log(firstElement)
//     for(let i = 0; i < SecondElement.length; i++){
//       if(!firstElement.includes(SecondElement[i])){
//         return false
//        }
//      }
//      return true
//    }
   
//    mutation(["hello", "hey"])

//use array method .every
// every method tests all elements in the array pass the test implemented by the provided function. 
// it returns boolean value

function mutation(arr) {
 
    // const isIncluded = arr[1].includes(arr[0])
   
    return arr[1].toLowerCase().split("").every( (el) => {
            return arr[0].toLowerCase().indexOf(el) !== -1
        })
}

console.log(mutation(["hello", "hey"]))
