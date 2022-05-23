/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode()
    let tail = dummy
 
    while( l1 !== null && l2 !== null){
        //select the smallest value from either linked list, then increment that list forward
        if(l1.val < l2.val){
            tail.next = l1
            l1 = l1.next
        } else {
             tail.next = l2
            l2 = l2.next
        }
        tail = tail.next // and then I need to update tail pointer regardless of which node we insert into our list
    }
    
    // what if the one list is empty but the other one isn't.
    // we want to find non-empty list and insert it at the end of our result
    if(l1 !== null){
        tail.next = l1
    }
    if(l2 !== null){
        tail.next = l2
    }
    
    console.log(dummy)
    return dummy.next // because we dont want dummy node 0 for this case
    
};

