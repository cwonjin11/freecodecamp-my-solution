 
//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//  }

var reverseList = function(head) {
    let prev = null // must store its previous element beforehand.
    let curr = head
    while(curr){ //(curr !== null)
        let nextTemp = curr.next // need another pointer to store the next node before chaning the reference.
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
    // O(n), O(1);
};


// var reverseList = function(head) {
//     let prev = null
//     while(head){ //head 1 2
//         const next = head.next  //next = 2 3
//         head.next = prev // 2 = prev  3 = prev
//         prev = head // 2 = head 3 head
//         head = next //head = 2 3
//     }
//     return prev
// }

// const head = new ListNode(1);
// const nodeB = head.next = new ListNode(2);
// const nodeC = nodeB.next = new ListNode(3);
// const nodeD = nodeC.next = new ListNode(4);
// const nodeE = nodeD.next = new ListNode(5);
// console.log(JSON.stringify(reverseList(head)));

// console.log( ListNode([1,2,3,4,5]) )

//same solution. time complexity: O(n) (how many time do we iterate over out input)
// var reverseList = function(head) {
//     let curr = head
//     let prev = null
//     let next = null 
//     while( curr !== null){
//         next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     return prev
// };



function ListNode(val, next) {
     this.val = val
     this.next =  null
 }
 
const A = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(4)
const e = new ListNode(5)

A.next = b
b.next = c
c.next = d
d.next = e


var reverseList = function(head) {
    let prev = null // must store its previous element beforehand.
    let curr = head
    while(curr){ //(curr !== null)
        let nextTemp = curr.next // need another pointer to store the next node before changing the reference.
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
    // O(n), O(1);
};

console.log(reverseList(A))



//recursive
var reverseList1 = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList1(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};