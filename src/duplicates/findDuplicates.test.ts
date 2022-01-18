import { findDuplicates, findDuplicatesWithBinarySearch } from './findDuplicates';

describe('findDuplicates and findDuplicatesWithBinarySearch', () => {
    /*
     * Input: array1 = [], array2 = []
     * Output: []
     */
    test('find duplicates in empty arrays', async () => {
        expect(findDuplicates([], [])).toEqual([]);
        expect(findDuplicatesWithBinarySearch([], [])).toEqual([]);
    });
    /*
     * Input: array1 = [1, 10, 20, 100], array2 = []
     * Output: []
     */
    test('find duplicates with one empty array', async () => {
        expect(findDuplicates([1, 10, 20, 100], [])).toEqual([]);
        expect(findDuplicatesWithBinarySearch([1, 10, 20, 100], [])).toEqual([]);
    });
    /*
     * Input: array1 = [1, 10, 20, 100], array2 = [1, 10, 20, 100]
     * Output: [1, 10, 20, 100]
     */
    test('find duplicates in two identical arrays', async () => {
        const array1 = [1, 10, 20, 100];
        const array2 = [1, 10, 20, 100];
        expect(findDuplicates(array1, array2)).toEqual(array1);
    });
    /*
     * Input: array1 = [0, 1, 2, 4, 9, 10, 11, 20, 100], array2 = [1, 3, 5, 7, 10, 20, 100, 1000, 2000]
     * Output: [1, 10, 20, 100]
     */
    test('find duplicates in two similar sized arrays', async () => {
        const array1 = [0, 1, 2, 4, 9, 10, 11, 20, 100];
        const array2 = [1, 3, 5, 7, 10, 20, 100, 1000, 2000];
        expect(findDuplicates(array1, array2)).toEqual([1, 10, 20, 100]);
    });
    /*
     * Input: array1 = [0, 1, 2, 4, 9, 10, 11, 20, 100, 9999], array2 = [1, 2, 3, ..., 1000000]
     * Output: [0, 1, 2, 4, 10, 11, 20, 100, 9999]
     */
    test('find duplicates with binary search in with array2 >> array1', async () => {
        const array1 = [0, 1, 2, 4, 9, 10, 11, 20, 100, 9999];
        const array2 = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            10,
            11,
            12,
            13,
            14,
            20,
            22,
            26,
            27,
            28,
            31,
            32,
            33,
            40,
            41,
            42,
            43,
            45,
            50,
            60,
            61,
            66,
            69,
            79,
            80,
            81,
            82,
            83,
            84,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            100,
            111,
            123,
            124,
            1000,
            2000,
            5545,
            8934,
            9945,
            9999,
            100000,
            1000000,
        ];
        expect(findDuplicatesWithBinarySearch(array1, array2)).toEqual([0, 1, 2, 4, 10, 11, 20, 100, 9999]);
    });
});
