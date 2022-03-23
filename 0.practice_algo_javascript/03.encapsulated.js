
// OOPs Encapsulating Explanation. 
//example


let baseSalary = 60000
let overtime = 10
let rate = 20
function getWage(baseSalary, overtime, rate){

    return baseSalary + (rate * overtime)
}

//Instead of above example, by usin OOPs encapsulating concept, we can have the below
let employee = {
    baseSalary: 60000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.rate * this.overtime)
    }
}

console.log(employee.getWage())