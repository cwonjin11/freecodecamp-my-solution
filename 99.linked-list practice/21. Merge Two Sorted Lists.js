
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



//https://leetcode.com/problems/merge-two-sorted-lists/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists1 = function(l1, l2){

    let dummy = new ListNode(-1)
    let head = dummy //why new variable head? The reference to dummy is going to keep changing. At the end, we can just reference the initial value and return it

    while(l1 && l2){
        if(l1.val < l2.val){
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }
    if(l1 !== null) dummy.next = l1
    if(l2 !== null) dummy.next = l2

    return head.next
}

console.log(mergeTwoLists1(a,x))








// var mergeTwoLists = function(l1, l2) {
//     let dummy = new ListNode(-1)
//     let head = dummy  // the reference to dummy is going to keep chaning. Why new variable head ? At the end, we can just reference the initial value and return it

//     while(l1 && l2){  // Select the smallest value from either linked list,
//         if(l1.val < l2.val){
//             dummy.next = l1
//             l1 = l1.next
//         } else {
//             dummy.next = l2
//             l2 = l2.next
//         }
//         dummy = dummy.next  //then increment that list forward.
//     }
//     // It's possible that one linked list is shorter than the other so we just
// 	// add on the remainder of the last linked list. It's already sorted :)
//     if(l1 !== null) dummy.next = l1
//     if(l2 !== null) dummy.next = l2

//     return head.next
// };
// console.log(mergeTwoLists(a,x))

