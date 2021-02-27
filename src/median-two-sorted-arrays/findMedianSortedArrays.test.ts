import findMedianSortedArrays from './findMedianSortedArrays';

describe('find median of two sorted arrays', () => {
    /*
     * Input: nums1 = [1,3], nums2 = [2]
     * Output: 2.00000
     */
    test('even simple arrays', () => {
        const nums1 = [1, 3];
        const nums2 = [1, 3];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(2.0);
    });
    /*
     * Input: nums1 = [1,2], nums2 = [3,4]
     * Output: 2.50000
     */
    test('even 2 times 2 arrays', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(2.5);
    });
    /*
     * Input: nums1 = [0,0], nums2 = [0,0]
     * Output: 0.00000
     */
    test('even same value arrays', () => {
        const nums1 = [0, 0];
        const nums2 = [0, 0];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(0.0);
    });
    /*
     * Input: nums1 = [], nums2 = [1]
     * Output: 1.00000
     */
    test('edge case empty and one item array', () => {
        const nums1: number[] = [];
        const nums2 = [1];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(1.0);
    });
    /*
     * Input: nums1 = [2], nums2 = []
     * Output: 2.00000
     */
    test('edge case one intem and empty array', () => {
        const nums1 = [2];
        const nums2: number[] = [];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(2.0);
    });
    /*
     * Input: nums1 = [], nums2 = [1]
     * Output: 1.00000
     */
    test('edge case empty arrays', () => {
        const nums1: number[] = [];
        const nums2: number[] = [];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(0);
    });
    /*
     * Input: nums1 = [1,7,8,9,10,12,13], nums2 = [2,5,7,14,15]
     * Output: 8.50000 => [1,2,5,7,7,(8,9),10,12,13,14,15]
     */
    test('long even arrays', () => {
        const nums1: number[] = [1, 7, 8, 9, 10, 12, 13];
        const nums2: number[] = [2, 5, 7, 14, 15];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(8.5);
    });
    /*
     * Input: nums1 = [1,3,5], nums2 = [4,6]
     * Output: 4 => [1,3,4,5,6]
     */
    test('uneven arrays', () => {
        const nums1: number[] = [1, 3, 5];
        const nums2: number[] = [4, 6];
        const output = findMedianSortedArrays(nums1, nums2);
        expect(output).toBe(4);
    });
});
