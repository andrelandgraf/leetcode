import threeSum from './threeSum';

describe('three sum', () => {
    /*
     * Input: nums = [-1,0,1,2,-1,-4]
     * Output: [[-1,-1,2],[-1,0,1]]
     */
    test('two matches equal zero', () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const output = threeSum(input);
        expect(output).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });
    /*
     * Input: nums = [1,1,-2]
     * Output: [[-2,1,1]]
     */
    test('exactly one match', () => {
        const input = [1, 1, -2];
        const output = threeSum(input);
        expect(output).toEqual([[-2, 1, 1]]);
    });
    /*
     * Input: nums = [6,-5,-6,-1,-2,8,-1,4,-10,-8,-10,-2,-4,-1,-8,-2,8,9,-5,-2,-8,-9,-3,-5]
     * Output: [[-10,4,6],[-8,-1,9],[-6,-2,8],[-6,-3,9],[-5,-1,6],[-5,-3,8],[-5,-4,9],[-4,-2,6],[-3,-1,4],[-2,-2,4]]
     */
    test('long input array', () => {
        const input = [6, -5, -6, -1, -2, 8, -1, 4, -10, -8, -10, -2, -4, -1, -8, -2, 8, 9, -5, -2, -8, -9, -3, -5];
        const output = threeSum(input);
        expect(output).toEqual([
            [-10, 4, 6],
            [-8, -1, 9],
            [-6, -3, 9],
            [-6, -2, 8],
            [-5, -4, 9],
            [-5, -3, 8],
            [-5, -1, 6],
            [-4, -2, 6],
            [-3, -1, 4],
            [-2, -2, 4],
        ]);
    });
    /*
     * Input: nums = []
     * Output: []
     */
    test('edge case emtpy input', () => {
        const input: number[] = [];
        const output = threeSum(input);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = []
     * Output: []
     */
    test('edge case not enough nums', () => {
        const input = [0, 1];
        const output = threeSum(input);
        expect(output).toEqual([]);
    });
    /*
     * Input: nums = [0,0,0,0,0,0]
     * Output: [0,0,0]
     */
    test('edge case only zeros', () => {
        const input = [0, 0, 0, 0, 0, 0];
        const output = threeSum(input);
        expect(output).toEqual([[0, 0, 0]]);
    });
    /*
     * Input: nums = [0,0,0]
     * Output: [0,0,0]
     */
    test('edge case three zeros', () => {
        const input = [0, 0, 0];
        const output = threeSum(input);
        expect(output).toEqual([[0, 0, 0]]);
    });
});
