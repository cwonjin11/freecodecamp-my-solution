class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")


a.next = b
b.next = c
c.next = d


// Iterative version
// we are only using handful variable curr and count. So better space complexity than recursive version.
// here we have constant space time complexity: O(1)
const getNodeValue = (head, index) => {
    let curr = head
    let count = 0
    while(curr){
        if(count === index) return curr.val
        curr = curr.next
        count++
    }
    return null
}

// Recursive version
// Linear time complexity and also linear space complexity
const getNodeValue1 = (head, index) => {
    if(head === null) return null //edge of linked list
    if(index === 0) return head.val
    return getNodeValue1(head.next, index - 1)
}

console.log(getNodeValue(a, 1))  //=> "B"
console.log(getNodeValue(a, 6))  //=> "null"

console.log(getNodeValue1(a, 1))  //=> "B"
console.log(getNodeValue1(a, 7))  //=> "null"