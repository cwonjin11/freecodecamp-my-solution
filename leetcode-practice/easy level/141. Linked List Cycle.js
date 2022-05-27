// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



// const linkedListCycle = (head) => {

//     let set = new Set()

//     while(head){
//         if(set.has(head)){
//             return true
//         }
//         set.add(head)
//         head = head.next
//     }
//     return false
// }

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node(3)
const b = new Node(2)
const c = new Node(0)
const e = new Node(4)

a.next = b
b.next = c
c.next = e
e.next = b



const x = new Node(1)





const linkedListCycle = (head) => {
    let curr = head
    let set = new Set()

    while(curr){
        if(set.has(curr)) return true
        set.add(curr)
        curr = curr.next
    }
    return false

}

console.log(linkedListCycle(a))















//  var hasCycle = function(head) {
    
//     let hash = new Set()
    
//     // if(!head || !head.next){
//     //     return false
//     // }
//     while(head){
//         if(hash.has(head)){
//             return true
//             break
//         }else{
//             hash.add(head)
//             head = head.next
//         }
//     }
//     return false
// };