import sortKMessedArray from './sortKMessedArray';

describe('sort k messed array', () => {
    /**
     * Input:  arr = [1,4,5,2,3,7,8,6,10,9], k = 2
     * Output: [1,2,3,4,5,6,7,8,9,10]
     */
    test('simple array with k 2', () => {
        const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
        const k = 2;
        expect(sortKMessedArray(arr, k)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    /**
     * Input:  arr =  [1,2,3,4,5,6,7,8,9,10], k = 1
     * Output: [1,2,3,4,5,6,7,8,9,10]
     */
    test('edge case k is 1', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const k = 1;
        expect(sortKMessedArray(arr, k)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
