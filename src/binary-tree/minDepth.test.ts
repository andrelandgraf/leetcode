import minDepth from './minDepth';
import { arrayToBinaryTree, binaryTreeToArray } from './treeUtils';

describe('minimum depth', () => {
    /**
     * Input: [3,9,20,null,null,15,7]
     * Output: 2
     */
    test('min depth of 2', () => {
        const root = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
        expect(minDepth(root)).toBe(2);
    });
    /**
     * Input: [2,null,3,null,4,null,5,null,6]
     * Output: 5
     */
    test('min depth of 5', () => {
        const root = arrayToBinaryTree([2, null, 3, null, 4, null, 5, null, 6]);
        expect(minDepth(root)).toBe(5);
    });
    /**
     * Input: [1,2,null,4,5,null,null,8,9,10]
     * Output: 5
     */
    test('complex uneven tree with min depth of ', () => {
        const root = arrayToBinaryTree([1, 2, null, 4, 5, null, null, 8, 9, 10]);
        expect(minDepth(root)).toBe(3);
    });
    /**
     * Input: []
     * Output: 0
     */
    test('edge case empty array', () => {
        const root = arrayToBinaryTree([]);
        expect(minDepth(root)).toBe(0);
    });
    /**
     * Input: [1]
     * Output: 0
     */
    test('edge case root is leaf', () => {
        const root = arrayToBinaryTree([1]);
        expect(minDepth(root)).toBe(1);
    });
});
