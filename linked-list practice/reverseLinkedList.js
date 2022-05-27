
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const a = new ListNode("A")
const b = new ListNode("B")
const c = new ListNode("C")
const d = new ListNode("D")
const e = new ListNode("E")
const f = new ListNode("F")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f


// Time: O(n) traversing through the entire linked list once
// Space: O(1) space complexity is constant because we only need a fixed number of variables
const reverseList = (head) => {
    let curr = head
    let prev = null

    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev // "prev" will contain the new head of linked list
}


const reverseList1 = (head, prev = null) => {

    if(head === null) return prev
    const next = head.next
    head.next = prev
    return reverseList1(next, head)
}




// console.log(reverseList(a))

console.log(reverseList1(a))