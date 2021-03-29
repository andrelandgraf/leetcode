import { arrayToLinkedList, linkedListToArray, strigifyNodeList } from './listUtils';
import removeNthFromEnd from './removeNthFromEnd';

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
