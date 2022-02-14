

function whichFunctionIsLarger(f,g) {
 
   if(f() > g()){
       return "f"
   } else if (f() < g()){
       return "g"
   } else {
       return "neither"
   }

}

console.log(whichFunctionIsLarger(()=> 5, () => 10))