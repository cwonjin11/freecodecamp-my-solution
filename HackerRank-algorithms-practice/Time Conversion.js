function timeConversion(s) {
    
    let arr = s.slice(0,8).split(":")
  
    if(s.includes('PM')){
       if(arr[0] == 12) {
           arr[0] = '12'
           console.log(arr[0])
       } else {
       arr[0] = Number(arr[0]) + 12
        }
    } else {
        if(arr[0] == 12) {
            arr[0] = '00'
        } else {
            arr[0]
        }
    }

    return arr.join(':')
}

console.log(timeConversion('01:13:00PM'))


// const arr = s.slice(0,8).split(':');
// arr[0] = (s.indexOf('PM') > -1) ?
//          (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
//          (arr[0] == 12 ? '00' : arr[0]);
// return arr.join(':');