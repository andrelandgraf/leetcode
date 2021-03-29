import ListNode from './LinkedList';

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let next = head.next;
    let current = head;
    head.next = null;
    while (next !== null) {
        let nextNext = next.next;
        next.next = current;
        current = next;
        next = nextNext;
    }
    return current;
}

export default reverseList;
