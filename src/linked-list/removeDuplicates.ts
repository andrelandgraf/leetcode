import LinkedList from './LinkedList';
import ListNode from './ListNode';

/*
    Remove duplicates from an unsorted linked list.
    How would you solve this problem if a temporary uffer is not allowed?
 */

/**
 * Uses lookup table
 * Time complexity: O(N)
 * Space complexity: O(M) where M = number of unique values in linked list
 *  => worst case M = N => O(N)
 */
function removeDuplicatesWithLookup(linkedList: LinkedList) {
    if (!linkedList.head) return linkedList;
    const table: Record<number, boolean> = {};

    let last = linkedList.head;
    table[last.val] = true;

    let current = last.next;
    while (current) {
        const value = current.val;
        if (table[value]) {
            current = current.next;
            last.next = current;
        } else {
            table[value] = true;
            last = current;
            current = current.next;
        }
    }
    return linkedList;
}

/**
 * Helper function for removeDuplicateInPlace
 */
function removeDuplicatesOf(node: ListNode) {
    const value = node.val;
    let current = node;
    let next = node.next;
    while (next) {
        if (next.val === value) {
            current.next = next.next;
            next = next.next;
        } else {
            current = next;
            next = next.next;
        }
    }
}

/**
 * Uses no additional data structures
 * Time complexity: O(N*N/2) => O(N^2)
 * Space complexity: O(1)
 */
function removeDuplicatesInPlace(linkedList: LinkedList) {
    if (!linkedList.head) return linkedList;
    let current: ListNode | null = linkedList.head;
    // Time complexity of O(N)
    while (current) {
        // Time complexity of O(N) for first iteration, O(N-1) for second iteration, ..., O(1) for last iteration
        removeDuplicatesOf(current);
        current = current.next;
    }
    return linkedList;
}

function removeDuplicates(linkedList: LinkedList) {
    return removeDuplicatesWithLookup(linkedList);
}

export { removeDuplicates };
