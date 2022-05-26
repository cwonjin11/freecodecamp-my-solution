

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(-1)
const e = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

// iterative version
const sumOfLinkedList = (head) => {
    let curr = head
    let sum = 0
    while(curr){
        sum += curr.val
        curr = curr.next
    }
    return sum
}

//recursive version
const sumOfLinkedList1 = (head) => {
    if(head === null) return
    return head.val + sumOfLinkedList(head.next)
}

console.log(sumOfLinkedList(a))
console.log(sumOfLinkedList1 (a))