import { quickSort } from './quickSort';

describe('quick sort', () => {
    /*
     * Input: [2,4,1,5,6,3]
     * Output: [1,2,3,4,5,6]
     */
    test('simple case', async () => {
        const input = [2, 4, 1, 5, 6, 3];
        const output = quickSort(input);
        expect(output).toEqual([1, 2, 3, 4, 5, 6]);
    });
    /*
     * Input: [1,2,3,4,5]
     * Output: [1,2,3,4,5]
     */
    test('edge case already sorted array', async () => {
        const input = [1, 2, 3, 4, 5];
        const output = quickSort(input);
        expect(output).toEqual([1, 2, 3, 4, 5]);
    });
    /*
     * Input: [2,1]
     * Output: [1,2]
     */
    test('edge case tuple array', async () => {
        const input = [2, 1];
        const output = quickSort(input);
        expect(output).toEqual([1, 2]);
    });
    /*
     * Input: [1]
     * Output: [1]
     */
    test('edge case one element', async () => {
        const input = [1];
        const output = quickSort(input);
        expect(output).toEqual([1]);
    });
    /*
     * Input: [5,1,4,2,8,6,7,14,11,1232,12,0,13,16,234,15,9,29,66,39,3,10,199]
     * Output: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,29,39,66,199,234,1232]
     */
    test('complex array', async () => {
        const input = [5, 1, 4, 2, 8, 6, 7, 14, 11, 1232, 12, 0, 13, 16, 234, 15, 9, 29, 66, 39, 3, 10, 199];
        const output = quickSort(input);
        expect(output).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 29, 39, 66, 199, 234, 1232]);
    });
    /*
     * Input: []
     * Output: []
     */
    test('edge case empty array', async () => {
        const input: number[] = [];
        const output = quickSort(input);
        expect(output).toEqual([]);
    });
});
