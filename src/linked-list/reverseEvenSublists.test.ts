import LinkedList from './LinkedList';
import { arrayToLinkedList, linkedListToArray } from './listUtils';
import { reverseEvenSublists } from './reverseEvenSublists';

describe('reverseEvenSublists', () => {
    /*
     * Input: [1,3,5,7]
     * Output: [1,3,5,7]
     */
    test('simple case without even sublists', async () => {
        const input = [1, 3, 5, 7];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 3, 5, 7]);
    });
    /*
     * Input: [1,2,8]
     * Output: [1,8,2]
     */
    test('simple case with one sublist', async () => {
        const input = [1, 2, 8];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 8, 2]);
    });
    /*
     * Input: [2,4,1,6,8,9]
     * Output: [4,2,1,8,6,9]
     */
    test('edge case list starts with even sublist', async () => {
        const input = [2, 4, 1, 6, 8, 9];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([4, 2, 1, 8, 6, 9]);
    });
    /*
     * Input: [1,3,6,8]
     * Output: [1,3,8,6]
     */
    test('edge case list ends with even sublist', async () => {
        const input = [1, 3, 6, 8];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 3, 8, 6]);
    });
    /*
     * Input: []
     * Output: []
     */
    test('edge case empty linked list', async () => {
        const linkedList = new LinkedList();
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([]);
    });
    /*
     * Input: [1]
     * Output: [1]
     */
    test('edge case linked list with one element', async () => {
        const input = [1];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1]);
    });
    /*
     * Input: [1,6,3]
     * Output: [1,6,3]
     */
    test('edge case linked list with even sublist of one element', async () => {
        const input = [1, 6, 3];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = reverseEvenSublists(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 6, 3]);
    });
});
