
const countOccurrences = (arr) => {
    return arr.reduce((a, b) => { 
        a[b] = a[b] + 1 || 1
        return a
    }, {})
   
  }


  console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));