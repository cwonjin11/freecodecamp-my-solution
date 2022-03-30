function funWithAnagrams(array){
    for(let i=0;i<array.length;i++){
      for(let j=array.length-1;j>i;j--){
        let sortedA = array[i].split("").sort().join("")
        let sortedB = array[j].split("").sort().join("")
        if(sortedA===sortedB){
          array.splice(j,1)
        }
      }
    }
    return array.sort()
  }



  //first unique char in string