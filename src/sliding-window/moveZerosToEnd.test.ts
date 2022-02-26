import { moveZerosToEnd } from './moveZerosToEnd';

describe('moveZerosToEnd', () => {
    /*
     * Input: [1,10,0,2]
     * Output: [1,10,2,0]
     */
    test('simple case with one zero', async () => {
        const input = [1, 10, 0, 2];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([1, 10, 2, 0]);
    });
    /*
     * Input: [0,1,0,0,10,0,2,0]
     * Output: [1,10,2,0,0,0,0,0]
     */
    test('complicated case with starting zero, two zeros, ending zero', async () => {
        const input = [0, 1, 0, 0, 10, 0, 2, 0];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([1, 10, 2, 0, 0, 0, 0, 0]);
    });
    /*
     * Input: []
     * Output: []
     */
    test('edge case empty array', async () => {
        const input: Array<number> = [];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([]);
    });
    /*
     * Input: [1]
     * Output: [1]
     */
    test('edge case one element array', async () => {
        const input = [1];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([1]);
    });
    /*
     * Input: [0]
     * Output: [0]
     */
    test('edge case one zero element array', async () => {
        const input = [0];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([0]);
    });
    /*
     * Input: [1,2,5]
     * Output: [1,2,5]
     */
    test('edge case no zeros', async () => {
        const input = [1, 2, 5];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([1, 2, 5]);
    });
    /*
     * Input: [0,1]
     * Output: [1,0]
     */
    test('edge case zero beginning', async () => {
        const input = [1, 2, 5];
        const output = moveZerosToEnd(input);
        expect(output).toEqual([1, 2, 5]);
    });
});
