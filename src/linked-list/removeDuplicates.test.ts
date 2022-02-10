import LinkedList from './LinkedList';
import { arrayToLinkedList, linkedListToArray, strigifyNodeList } from './listUtils';
import { removeDuplicates } from './removeDuplicates';

describe('remove duplicates', () => {
    /*
     * Input: [1,2,3,4,5]
     * Output: [1,2,3,4,5]
     */
    test('simple case without duplicates', async () => {
        const input = [1, 2, 3, 4, 5];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = removeDuplicates(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 2, 3, 4, 5]);
    });
    /*
     * Input: [1,5,1,5,6,6,1,2,3]
     * Output: [1,5,6,2,3]
     */
    test('simple case with duplicates', async () => {
        const input = [1, 5, 1, 5, 6, 6, 1, 2, 3];
        const head = arrayToLinkedList(input);
        const linkedList = new LinkedList(head);
        const outputList = removeDuplicates(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1, 5, 6, 2, 3]);
    });
    /*
     * Input: []
     * Output: []
     */
    test('edge case empty linked list', async () => {
        const linkedList = new LinkedList();
        const outputList = removeDuplicates(linkedList);
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
        const outputList = removeDuplicates(linkedList);
        const output = linkedListToArray(outputList.head);
        expect(output).toEqual([1]);
    });
});
