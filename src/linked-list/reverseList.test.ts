import { arrayToLinkedList, linkedListToArray, strigifyNodeList } from './listUtils';
import reverseList from './reverseList';

describe('reverse linked list', () => {
    /*
     * Input: [1,2,3,4,5]
     * Output: [5,4,3,2,1]
     */
    test('reverse simple linked list', async () => {
        const input = [1, 2, 3, 4, 5];
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = reverseList(head);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([5, 4, 3, 2, 1]);
    });
    /*
     * Input: [1,2]
     * Output: [2,1]
     */
    test('reversing tuple', async () => {
        const input = [1, 2];
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = reverseList(head);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([2, 1]);
    });
    /*
     * Input: [1]
     * Output: [1]
     */
    test('reversinge single element linked list', async () => {
        const input = [1];
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = reverseList(head);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual([1]);
    });
    /*
     * Input: [1,2,3,4,5,6,...,1000]
     * Output: [1000,...,6,5,4,3,2,1]
     */
    test('reverse long linked list', async () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        for (let i = 1; i <= 1000; i += 1) {
            input[i - 1] = i;
            expectedOutput[i - 1] = 1000 - (i - 1);
        }
        const head = arrayToLinkedList(input);
        console.log(`input list: ${strigifyNodeList(head)}`);
        const outputHead = reverseList(head);
        console.log(`output list: ${strigifyNodeList(outputHead)}`);
        const output = linkedListToArray(outputHead);
        expect(output).toEqual(expectedOutput);
    });
    /*
     * Input: null
     * Output: null
     */
    test('edge case reverse null linked list', async () => {
        const head = null;
        const outputHead = reverseList(head);
        expect(outputHead).toEqual(null);
    });
});
