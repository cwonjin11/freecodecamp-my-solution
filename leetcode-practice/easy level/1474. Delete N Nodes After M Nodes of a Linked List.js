var deleteNodes = function(head, m, n) {
    let curr = head
    let last = head

    while(curr){
        let mCount = m
        let nCount = n
        while(curr && mCount !== 0){
            last = curr
            curr = curr.next
            mCount--
        }
        while(curr && nCount !== 0){
            curr = curr.next
            nCount--
        }
        last.next = curr // ???? 
    }
    return head

    
}