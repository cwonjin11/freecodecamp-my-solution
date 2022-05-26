class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d

//return an array that takes all values of the nodes in the lined list

const linkedListValues = (head) => {
    let curr = head
    let result = []
    while(curr){
        result.push(curr.val)
        curr = curr.next
    }
    return result
}

//or recursive version. Seperate recursive funtion for better time complexity
const linkedListValues1 = (head) => {

    let arr = []
    fillValues(head, arr)
    return arr
}

const fillValues = (head, arr) => {
    if(head === null) return
    arr.push(head.val)
    fillValues(head.next, arr) 
}


console.log(linkedListValues(a))   // iterative version
console.log(linkedListValues1(a))  // recursive version