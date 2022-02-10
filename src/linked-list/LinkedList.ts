import ListNode from './ListNode';

/**
 * It has advantages to have a wrapper class around the head ListNode.
 * Example: In case the head ListNode changes, the reference to the LinkedList
 * will stay the same but the reference to the head ListNode might be outdated
 * if stored somewhere else in the code.
 */
class LinkedList {
    head: ListNode | null;

    constructor(head?: ListNode) {
        this.head = head == undefined ? null : head;
    }
}

export default LinkedList;
