import { shiftedArrSearch } from './shiftedArraySearch';

describe('shiftedArraySearch', () => {
    /**
     * Input: [0,2,3,4,5], 0
     * Output: 0
     */
    test('simple case shifted by 0', () => {
        const input = [0, 2, 3, 4, 5];
        const output = shiftedArrSearch(input, 0);
        expect(output).toBe(0);
    });
    /**
     * Input: [2,3,4,5,0], 0
     * Output: 4
     */
    test('simple case shifted by 1', () => {
        const input = [2, 3, 4, 5, 0];
        const output = shiftedArrSearch(input, 0);
        expect(output).toBe(4);
    });
    /**
     * Input: [2,3,4,5,0,1], 4
     * Output: 2
     */
    test('simple case shifted by 2', () => {
        const input = [2, 3, 4, 5, 0, 1];
        const output = shiftedArrSearch(input, 4);
        expect(output).toBe(2);
    });
    /**
     * Input: [2,3,4,5,0,1], 5
     * Output: 3
     */
    test('simple case shifted by 2 find max value', () => {
        const input = [2, 3, 4, 5, 0, 1];
        const output = shiftedArrSearch(input, 5);
        expect(output).toBe(3);
    });
    /**
     * Input: [2,3,4,5,0,1], 6
     * Output: -1
     */
    test('simple case shifted by 2 not found', () => {
        const input = [2, 3, 4, 5, 0, 1];
        const output = shiftedArrSearch(input, 6);
        expect(output).toBe(-1);
    });
    /**
     * Input: [], 5
     * Output: -1
     */
    test('edge case: empty array', () => {
        const input: Array<number> = [];
        const output = shiftedArrSearch(input, 5);
        expect(output).toBe(-1);
    });
    /**
     * Input: [5], 5
     * Output: 0
     */
    test('edge case: one element', () => {
        const input = [5];
        const output = shiftedArrSearch(input, 5);
        expect(output).toBe(0);
    });
    /**
     * Input: [3], 5
     * Output: -1
     */
    test('edge case: one element not found', () => {
        const input = [3];
        const output = shiftedArrSearch(input, 5);
        expect(output).toBe(-1);
    });
    /**
     * Input: [3,1], 1
     * Output: 1
     */
    test('edge case: two elements', () => {
        const input = [3, 1];
        const output = shiftedArrSearch(input, 1);
        expect(output).toBe(1);
    });
});
