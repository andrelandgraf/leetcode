import LinkedList from './LinkedList';
import ListNode from './ListNode';

/**
 * Time complexity: O(N) where N is number of even elements until next uneven element
 * Space complexity: O(1)
 */
function reverseEvenNodes(head: ListNode): [head: ListNode, tail: ListNode | null] {
    let current = head;
    let next = head.next;
    while (next && next.val % 2 === 0) {
        const nextNext = next.next;
        next.next = current;
        current.next = nextNext;

        current = next;
        next = nextNext;
    }
    return [current, next];
}

/**
 * Time complexity: O(N) where N is number of elements
 * Space complexity: O(1)
 */
function reverseEvenSublists(linkedList: LinkedList): LinkedList {
    if (!linkedList.head) return linkedList;
    let shouldChangeHead = true;
    let current: ListNode | null = null;
    let next: ListNode | null = linkedList.head;

    while (next) {
        const nextNext = next.next;
        if (next.val % 2 === 0 && nextNext && nextNext.val % 2 === 0) {
            const [head, tail] = reverseEvenNodes(next);
            if (current) {
                current.next = head;
            }
            if (shouldChangeHead) {
                shouldChangeHead = false;
                linkedList.head = head;
            }
            current = tail;
            next = tail ? tail.next : null;
        } else {
            shouldChangeHead = false;
            current = next;
            next = next.next;
        }
    }

    return linkedList;
}

export { reverseEvenSublists };
