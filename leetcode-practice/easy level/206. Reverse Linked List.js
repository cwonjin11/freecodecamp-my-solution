var reverseList = function(head) {
    
    let prev = null

    while(head){ //head 1 2
        const next = head.next  //next = 2 3
        head.next = prev // 2 = prev  3 = prev
        prev = head // 2 = head 3 head
        head = next //head = 2 3
    }
    return prev
    
};

//same solution. time complexity: O(n) (how many time do we iterate over out input)
var reverseList = function(head) {

    let curr = head
    let prev = null
    let next = null
    
    while( curr !== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev

};

