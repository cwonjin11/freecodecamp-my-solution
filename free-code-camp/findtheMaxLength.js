function findLongestWordLength(str) {

    str = str.split(" ")
    let max = str[0].length
    for(let i = 0; i < str.length; i++){
        max = Math.max(max, str[i].length)

    }
    return max
  }


  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))