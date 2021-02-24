import ListNode from './LinkedList';
import removeNthFromEnd from './removeNthFromEnd';

/*
 * helper function to create a linked list recurively
 */
const recursiveHelper = (current: ListNode, array: number[]) => {
    current.val = array[0];
    if (array.length > 1) {
        current.next = new ListNode();
        // avoid side effects
        const clonedArray = [...array];
        clonedArray.splice(0, 1);
        recursiveHelper(current.next, clonedArray);
    }
};

/*
 * creates a linked list based on an array input
 */
const arrayToLinkedList = (array: number[]): ListNode => {
    if (!array.length) {
        throw Error('empty array not supported');
    }
    const head = new ListNode();
    recursiveHelper(head, array);
    return head;
};

/*
 * parses a linked list back to an array
 */
const linkedListToArray = (current: ListNode | null, array: number[] = []): number[] => {
    if (!current) {
        return [];
    }
    array.push(current.val);
    if (!current.next) {
        return array;
    }
    return linkedListToArray(current.next, array);
};

const strigifyNodeList = (current: ListNode | null, str: string = ''): string => {
    if (!current) {
        return 'null';
    }
    str += `${current.val} => `;
    if (!current.next) {
        return str + 'null';
    }
    return strigifyNodeList(current.next, str);
};

describe('removeNthFromEnd', () => {
    /*
     * Input: head = [1,2,3,4,5], n = 2
     * Output: [1,2,3,5]
     */
    test('removing n of value 2 from linked list', async () => {
        const input = [1, 2, 3, 4, 5];
        const n = 2;
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = removeNthFromEnd(head, n);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([1, 2, 3, 5]);
    });
    /*
     * Input: head = [1], n = 1
     * Output: []
     */
    test('removing only element from linked list', async () => {
        const input = [1];
        const n = 1;
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = removeNthFromEnd(head, n);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([]);
    });
    /*
     * Input: head = [1,2], n = 1
     * Output: [1]
     */
    test('removing last element from linked list', async () => {
        const input = [1, 2];
        const n = 1;
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = removeNthFromEnd(head, n);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([1]);
    });
    /*
     * Input: head = [1,2], n = 2
     * Output: [2]
     */
    test('removing first element from linked list', async () => {
        const input = [1, 2];
        const n = 2;
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = removeNthFromEnd(head, n);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([2]);
    });
});
