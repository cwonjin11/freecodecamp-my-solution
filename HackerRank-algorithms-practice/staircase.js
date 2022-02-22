function staircase(n) {

    /*
    n=4
   i\j 0123    
    0: ...#
    1: ..##
    2: .###
    3: ####
    */


        
        // for(let i=0; i < n; i++){
        //     let result = ''  // declare result variable inside the loop. why? cause no return outside the loop
        //     for(let j=n-1; j > -1; j--){
        //         if(i<j){
        //             result += ' '
        //         } else {
        //             result += '#'
        //         }
        //     }
        //    console.log(result)  //not return result
        // }

        let result = ""
            for(let i=0; i < n; i++){
                result += "#"
                console.log(result.padStart(n, " "))
            }
       





    // i => current row
    // j => current column 

 

    // for(let i = 0; i < n; i++){
    //     let stair = ''
    //     for(let j=n; j >= 0; j--){
    //         if( j <= i ){
    //             stair += '#'
    //         } else {
    //             stair += ' '
    //         }
    //     }
    //     console.log(stair)
    // }


    // for (let row = 0; row < n; row++) {
    //     let step = '';
    //     for (let col = 0; col < n; col++) {
    //       step += (col <= row) ? '#' : ' ';
    //     }
    //     console.log(step);
    //   }


    
}
console.log(staircase(6))