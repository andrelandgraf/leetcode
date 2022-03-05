import { fourSum } from './fourSum';

describe('four sum', () => {
    /*
     * Input: nums = [-1,0,1,2,-1,-4], target = 2
     * Output: [[-1,0,1,2]]
     */
    test('two identical quadruplets match', () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const output = fourSum(input, 2);
        expect(output).toEqual([[-1, 0, 1, 2]]);
    });
    /*
     * Input: nums = [-1,0,1,2,-1,-4], target = 5
     * Output: []
     */
    test('no match', () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const output = fourSum(input, 5);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = [1,1,-2], target = 0
     * Output: [[-2,1,1]]
     */
    test('exactly one match', () => {
        const input = [1, 1, -2, 0];
        const output = fourSum(input, 0);
        expect(output).toEqual([[-2, 0, 1, 1]]);
    });
    /*
     * Input: nums = [], target = 6
     * Output: []
     */
    test('edge case emtpy input', () => {
        const input: number[] = [];
        const output = fourSum(input, 6);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = [], target = 4
     * Output: []
     */
    test('edge case not enough nums', () => {
        const input = [0, 1, 3];
        const output = fourSum(input, 4);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = [0,0,0,0,0,0], target = 0
     * Output: [0,0,0,0]
     */
    test('edge case only zeros', () => {
        const input = [0, 0, 0, 0, 0, 0];
        const output = fourSum(input, 0);
        expect(output).toEqual([[0, 0, 0, 0]]);
    });
});
