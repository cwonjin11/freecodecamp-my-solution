
function solution(A) {
    let mapObject={}
    for(let i=0;i<A.length;i++){
       if(mapObject[A[i]])
       {
         delete mapObject[A[i]]
       }else{
         mapObject[A[i]]=A[i];
       }
     }
   return Object.values(mapObject)[0];
  }

console.log(solution([4, 10, 5, 4, 2, 10])) 