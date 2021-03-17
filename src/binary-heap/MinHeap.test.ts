import MinHeap from './MinHeap';

describe('binary min heat array implementation', () => {
    /**
     * Input: [5,1,10,2,3,6,4]
     * Output: [1,2,5,4,3,6,10] aka.
     *              1
     *      2               5
     *  4       3       6       10
     */
    test('heap sort', () => {
        const array = [5, 1, 10, 2, 3, 6, 4];
        const minHeap = new MinHeap(array);
        expect(minHeap.heap).toEqual([1, 2, 5, 4, 3, 6, 10]);
    });
    /**
     * Input: [10,5,9,10,7,3,6,4,5]
     * Output: 3
     */
    test('get min', () => {
        const array = [10, 5, 9, 10, 7, 3, 6, 4, 5];
        const minHeap = new MinHeap(array);
        expect(minHeap.getMin()).toBe(3);
    });
    /**
     * Input: [8,5,9,4,7,3,6,2,1]
     * Output: [2,4,3,5,7,6,9,8] aka.
     *                  2
     *          4               3
     *      5       7       6       9
     *  8
     */
    test('remove min', () => {
        const array = [8, 5, 9, 4, 7, 3, 6, 2, 1];
        const minHeap = new MinHeap(array);
        expect(minHeap.heap).toEqual([1, 2, 3, 4, 7, 6, 9, 8, 5]);
        expect(minHeap.removeMin()).toBe(1);
        expect(minHeap.heap).toEqual([2, 4, 3, 5, 7, 6, 9, 8]);
    });
    /**
     * Input: [8,5,9,4,7,3,6,2,1], value 10
     * Output: [1,2,3,4,7,6,9,8,5,10] aka.
     *                  1
     *          2               3
     *      4       7       6       9
     *   8    5  10
     */
    test('insert value', () => {
        const array = [8, 5, 9, 4, 7, 3, 6, 2, 1];
        const minHeap = new MinHeap(array);
        expect(minHeap.heap).toEqual([1, 2, 3, 4, 7, 6, 9, 8, 5]);
        minHeap.push(10);
        expect(minHeap.heap).toEqual([1, 2, 3, 4, 7, 6, 9, 8, 5, 10]);
    });
    /**
     * Input: [8,5,9,4,7,3,6,2,1], value 0
     * Output: [0,1,3,4,2,6,9,8,5,7] aka.
     *                  0
     *          1               3
     *      4       2       6       9
     *   8    5  7
     */
    test('insert new min value', () => {
        const array = [8, 5, 9, 4, 7, 3, 6, 2, 1];
        const minHeap = new MinHeap(array);
        expect(minHeap.heap).toEqual([1, 2, 3, 4, 7, 6, 9, 8, 5]);
        minHeap.push(0);
        expect(minHeap.heap).toEqual([0, 1, 3, 4, 2, 6, 9, 8, 5, 7]);
    });
    /**
     * Input: [0,1,3], values 2,5,10,0,4,6
     * Output: [0,1,0,2,5,10,3,4,6] aka.
     *                  0
     *          1               0
     *      2       5       10      3
     *  4       6
     */
    test('insert several values', () => {
        const array = [0, 1, 3];
        const minHeap = new MinHeap(array);
        minHeap.push(2, 5, 10, 0, 4, 6);
        expect(minHeap.getMin()).toBe(0);
        expect(minHeap.heap).toEqual([0, 1, 0, 2, 5, 10, 3, 4, 6]);
    });
    /**
     * Input: []
     * Output: undefined
     */
    test('edge case getMin of empty heap', () => {
        expect(new MinHeap().getMin()).toBeUndefined();
    });
    /**
     * Input: []
     * Output: undefined
     */
    test('edge case removeMin of empty heap', () => {
        expect(new MinHeap().removeMin()).toBeUndefined();
    });
    /**
     * Input: [1]
     * Output: []
     */
    test('edge case removeMin last element', () => {
        const minHeap = new MinHeap([1]);
        expect(minHeap.removeMin()).toBe(1);
        expect(minHeap.heap.length).toBe(0);
    });
    /**
     * Input: [], value 10
     * Output: [10]
     */
    test('edge case push first element', () => {
        const minHeap = new MinHeap();
        minHeap.push(10);
        expect(minHeap.heap).toEqual([10]);
    });
});
