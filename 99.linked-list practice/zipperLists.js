// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")

const x = new Node("x")
const y = new Node("y")
const z = new Node("z")

a.next = b
b.next = c

x.next = y
y.next = z


//iterative
// Time: O(n)
// Space: O(1)
const zipperLists = (head1, head2) => {
    let tail = head1
    let curr1 = head1.next
    let curr2 = head2
    let count = 0

    while(curr1 && curr2){
        if(count % 2 == 0) {
            tail.next = curr2
            curr2 = curr2.next
        } else {
            tail.next = curr1
            curr1 = curr1.next
        }
        tail = tail.next
        count++
    }

    if(curr1 !== null) tail.next = curr1
    if(curr2 !== null) tail.next = curr2

    return head1
}

console.log(zipperLists(a, x)) //=> a -> x -> b -> y -> c -> z



//recursive
const zipperLists1 = (head1, head2) => {
    if(head1 === null && head2 === null) return null
    if(head1 === null) return head2
    if(head2 === null) return head1

    const next1 = head1.next
    const next2 = head2.next
    head1.next = head2

    head2.next = zipperLists1(next1, next2)

    return head1
}

// console.log(zipperLists1(a, x)) //=> a -> x -> b -> y -> c -> z