// Given the head of a linked list and an integer val, 
// remove all the nodes of the linked list that has Node.val == val, 
// and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:
// Input: head = [], val = 1
// Output: []
// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:
// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

class ListNode {
    constructor(val = 0, next = null){
        this.val = val
        this.next = next
    }
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(6)
const d = new ListNode(3)
const e = new ListNode(4)
const f = new ListNode(5)
const g = new ListNode(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g

var removeElements = function(head, val) {
    let dummy = new ListNode(-1)
    console.log(dummy)
    dummy.next = head
    
    let curr = head
    let prev = dummy

    while(curr){
        if(curr.val == val){
            prev.next = curr.next
        } else {
            prev = curr
        }
        curr = curr.next
    }
    return dummy.next
}

console.log(removeElements(a, 6))