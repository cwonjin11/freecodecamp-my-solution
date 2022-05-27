class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}


const a = new Node ("A")
const b = new Node ("B")
const c = new Node ("C")
const d = new Node ("D")

a.next = b
b.next = c
c.next = d

// using only constant space 
const listFind = (head, target) => {
    let curr = head
    while(curr){
        if(curr.val == target){
            return true
        }
        curr = curr.next
    }
    return false

}

// using linear amount of space because of the call stack
const listFind1 = (head, target) => {
    if(head === null) return false    //1st base case
    if(head.val == target) return true // 2nd base case
    // if both case is not true
    return listFind1(head.next, target)
  
}


console.log(listFind(a, "F"))
console.log(listFind1(a, "F"))
console.log(listFind(a, "C"))
console.log(listFind1(a, "C"))