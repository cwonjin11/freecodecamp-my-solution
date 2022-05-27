
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100


// using counter but not the best way
var middleNode = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let head1 = dummy
    let head2 = dummy
    let count = 0
    
    while(head1.next !== null){
        count++
        head1 = head1.next
    }
    console.log(count)
    if(count % 2 == 0){
        count++
    }
    
    let i = 0
    
    while(i < count/2){
        head2 = head2.next
        i++
    }
    return head2
};


//Time : O(n)
//Space : O(1)
//Using slow and fast pointer. fast traverses twice as fast than slow .
// when fast reaches the end of the list, slow must be in the middle
var middleNode = function(head) {
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};