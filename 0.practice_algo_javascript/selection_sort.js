function selectionSort(arr) {

 
    let sorted = []
    for(let i = 0; i <= arr.length; i++){
        // console.log(arr)
      let min = Math.min(...arr)
    //   console.log(min)
      let index = arr.indexOf(min)
      sorted.push(min)
      arr.splice(index, 1)
      console.log(arr)
    }
    return sorted
  }


  console.log(selectionSort([-3,1,5,4,2]))