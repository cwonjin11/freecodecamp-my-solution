

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d



// const printLinkedList = (head) => {

//     let curr = head
 
//     while(curr !== null){
//         console.log(curr.val)
//         curr = curr.next
//     }
// }

// printLinkedList(a) // => A -> B -> C -> D


//recursively 
const printLinkedList = (head) => {
    if(head === null) return
    console.log(head.val)
    printLinkedList(head.next)
}

printLinkedList(a) // => A -> B -> C -> D