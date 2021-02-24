import ListNode from './LinkedList';

function getNodeListLength(current: ListNode): number {
    if (!current.next) {
        return 1;
    }
    return 1 + getNodeListLength(current.next);
}

function recursiveHelper(current: ListNode, stopIndex: number, currentIndex: number = 0): void {
    if (currentIndex + 1 === stopIndex) {
        const removedNode = current.next;
        if (removedNode) {
            current.next = removedNode.next;
        }
        return;
    }
    if (!current.next) {
        return;
    }
    recursiveHelper(current.next, stopIndex, currentIndex + 1);
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
    const length = getNodeListLength(head);
    const stopIndex = length - n;
    if (stopIndex === 0) {
        return head.next;
    }
    recursiveHelper(head, stopIndex);
    return head;
}

export default removeNthFromEnd;
