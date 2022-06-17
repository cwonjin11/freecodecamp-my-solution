class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new ListNode(1)
const b = new ListNode(1)
const c = new ListNode(2)

a.next = b
b.next = c



var deleteDuplicates1 = function(head) {
    let curr = head
    
    while(curr && curr.next ){
        if( curr.val == curr.next.val){
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
    
};

console.log(deleteDuplicates(a))




// var deleteDuplicates = function(head) {
//     let curr = head
//     while(curr){
//         if(curr.next && curr.val == curr.next.val){
//             curr.next = curr.next.next
//         } else {
//             curr = curr.next
//         }
//     }
//     return head
//  };

