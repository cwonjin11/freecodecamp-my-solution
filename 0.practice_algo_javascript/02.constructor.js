

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log(`hello, my name is ${this.name}, ${this.age} years old`)
    }
}

const person1 = new Person("Wonjin", 38)
person1.introduce() // => hello, my name is Wonjin, 38 years old
console.log(person1.name) // => Wonjin
console.log(person1.age)  // => 38