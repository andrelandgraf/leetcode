import indexEqualsValueSearch from './indexEqualsValueSearch';

describe('array index and element equality', () => {
    /**
     * Input: [0,2,3,4,5]
     * Output: 0
     */
    test('first index match', () => {
        const input = [0, 2, 3, 4, 5];
        expect(indexEqualsValueSearch(input)).toBe(0);
    });
    /**
     * Input: [-8,-10,0,1,4]
     * Output: 4
     */
    test('last index match', () => {
        const input = [-8, -10, 0, 1, 4];
        expect(indexEqualsValueSearch(input)).toBe(4);
    });
    /**
     * Input: [-2,0,2,4,5]
     * Output: 2
     */
    test('middle index match', () => {
        const input = [-2, 0, 2, 4, 5];
        expect(indexEqualsValueSearch(input)).toBe(2);
    });
    /**
     * Input: [-2,0,1,2,3,4,6,7,8]
     * Output: 2
     */
    test('index of 6 first of many matches', () => {
        const input = [-2, 0, 1, 2, 3, 4, 6, 7, 8];
        expect(indexEqualsValueSearch(input)).toBe(6);
    });
    /**
     * Input: [1,2,3,4,5]
     * Output: -1
     */
    test('no index match', () => {
        const input = [1, 2, 3, 4, 5];
        expect(indexEqualsValueSearch(input)).toBe(-1);
    });
    /**
     * Input: []
     * Output: -1
     */
    test('edge case no items', () => {
        const input = <number[]>[];
        expect(indexEqualsValueSearch(input)).toBe(-1);
    });
});
