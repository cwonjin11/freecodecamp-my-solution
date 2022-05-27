
class ListNode {
    constructor(val = null, next = null) {
        this.val = val
        this.next = next
    }
}

const a = new ListNode(1)
const b = new ListNode(3)
const c = new ListNode(4)

a.next = b
b.next = c

const x = new ListNode(1)
const y = new ListNode(2)
const z = new ListNode(4)

x.next = y
y.next = z


var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy  // the reference to dummy is going to keep chaning. Why new variable head ? At the end, we can just reference the initial value and return it

    while(l1 && l2){  // Select the smallest value from either linked list,
        if(l1.val < l2.val){
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next  //then increment that list forward.
    }
    // It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if(l1 !== null) dummy.next = l1
    if(l2 !== null) dummy.next = l2

    return head.next
};
console.log(mergeTwoLists(a,x))

