import twoSum from './twoSum';

/**
 * sorts the output indicies to compare with expected output
 */
const sortTwoSums = (array: number[]) => array.sort((a, b) => a - b);

describe('two sum', () => {
    /*
     * Input: nums = [2,7,11,15], target = 9
     * Output: [0,1]
     */
    test('frist two elements provide target of 9', () => {
        const input = [2, 7, 11, 15];
        const target = 9;
        const output = twoSum(input, target);
        expect(sortTwoSums(output)).toEqual([0, 1]);
        const [i, j] = output;
        expect(input[i] + input[j]).toBe(target);
    });
    /*
     * Input: nums = [3,2,4], target = 6
     * Output: [1,2]
     */
    test('second and third element provide target of 6', () => {
        const input = [3, 2, 4];
        const target = 6;
        const output = twoSum(input, target);
        expect(sortTwoSums(output)).toEqual([1, 2]);
        const [i, j] = output;
        expect(input[i] + input[j]).toBe(target);
    });
    /*
     * Input: nums = [3,3], target = 6
     * Output: [0,1]
     */
    test('array of two elements works as expected', () => {
        const input = [3, 3];
        const target = 6;
        const output = twoSum(input, target);
        expect(sortTwoSums(output)).toEqual([0, 1]);
        const [i, j] = output;
        expect(input[i] + input[j]).toBe(target);
    });
    /*
     * Input: nums = [], target = 6
     * Output: []
     */
    test('edge case empty nums', () => {
        const input: number[] = [];
        const target = 6;
        const output = twoSum(input, target);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = [6], target = 6
     * Output: []
     */
    test('edge case one item in nums', () => {
        const input: number[] = [6];
        const target = 6;
        const output = twoSum(input, target);
        expect(output).toEqual([]);
    });
});
