// const alterCase = (str) =>  {

//     return str.replace(/[a-z]/gi, c => c[`to${(str=!str) ? 'Low' : 'Upp'}erCase`]())
// }


// console.log(alterCase("we are the world")) // => We ArE tHe WoRld



const dec_to_bho  = (n, base) => {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}

console.log(dec_to_bho(17))