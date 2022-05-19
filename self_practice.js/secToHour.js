
const convertSecToHour = (sec) => {

    let date = new Date(null)
    date.setSeconds(sec)
    console.log( date.toISOString().substring(11,8) )
    //not working
}

console.log(convertSecToHour(86399))