import isSameTree from './isSameTree';
import TreeNode from './TreeNode';
import { arrayToBinaryTree, binaryTreeToArray } from './treeUtils';

describe('is same tree', () => {
    /**
     * Input: p = [1,2,3], q = [1,2,3]
     * Output: true
     */
    test('simple same trees', () => {
        const p = arrayToBinaryTree([1, 2, 3]);
        const q = arrayToBinaryTree([1, 2, 3]);
        expect(isSameTree(p, q)).toBe(true);
    });
    /**
     * Input: p = [1,2], q = [1,null,2]
     * Output: false
     */
    test('mirrored tree with null is not same tree', () => {
        const p = arrayToBinaryTree([1, 2]);
        const q = arrayToBinaryTree([1, null, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });
    /**
     * Input: p = [1,2,1], q = [1,1,2]
     * Output: false
     */
    test('mirrored tree is not same tree', () => {
        const p = arrayToBinaryTree([1, 2, 1]);
        const q = arrayToBinaryTree([1, 1, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });
    /**
     * Input: p = [1,2,3,4,5,6,7,8,9,10], q = [1,2,3,4,5,6,7,8,9,10]
     * Output: true
     */
    test('complex same tree', () => {
        const p = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const q = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        console.log(binaryTreeToArray(p));
        expect(isSameTree(p, q)).toBe(true);
    });
    /**
     * Input: p = [1,2,null,4,5,null,null,8,9,10], q = [1,2,null,4,5,null,null,8,9,10]
     * Output: true
     */
    test('complex uneven same tree', () => {
        const p = arrayToBinaryTree([1, 2, null, 4, 5, null, null, 8, 9, 10]);
        const q = arrayToBinaryTree([1, 2, null, 4, 5, null, null, 8, 9, 10]);
        console.log(binaryTreeToArray(p));
        expect(isSameTree(p, q)).toBe(true);
    });
    /**
     * Input: p = [1,2,3,4,5,6,7,8,9,10], q = [1,2,3,4,5,6,7,8,9,10]
     * Output: true
     */
    test('complex not same tree', () => {
        const p = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        const q = arrayToBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        console.log(binaryTreeToArray(p));
        expect(isSameTree(p, q)).toBe(false);
    });
});
