

const pareTwoSum = (arr1, arr2, target) => {


    let x = 0
    let y = 0

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] + arr2[j] - target) < (Math.abs(arr1[x] + arr2[y] - target))){
                x = i
                y = j
            }
        }
        
    }
    
    

}

console.log(pareTwoSum([-1,3,8,2,9,5], [4,1,2,10,5,20], 24))