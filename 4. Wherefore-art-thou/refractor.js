const whatIsInAName = (collection, source) => {
    // const arr = [];

    const keys = Object.keys(source)

    // for(const obj of collection){
    //     let hasAllKeysValuePairs = true
    //     for(const key of keys){
    //         if(obj[key] !== source[key]) {
    //             hasAllKeysValuePairs = false
    //             break
    //         }
    //     }

    //     if (hasAllKeysValuePairs) {
    //         arr.push(obj)
    //     }
    // }

    const arr = collection.filter(obj => {
        let hasAllKeysValuePairs = true
       
        for(const key of keys){
            if(obj[key] !== source[key]) {
                hasAllKeysValuePairs = false
                break
            }
        }
        return hasAllKeysValuePairs
        // if (hasAllKeysValuePairs){
        //     return true
        // }else {
        //     return false
        // }

    })




    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
  console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }))
  console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))