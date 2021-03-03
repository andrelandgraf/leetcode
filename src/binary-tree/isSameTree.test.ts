import isSameTree from './isSameTree';
import TreeNode from './TreeNode';

const getNextIndex = (parentIndex: number): [number, number] => {
    const leftIndex = parentIndex * 2 + 1;
    const rightIndex = leftIndex + 1;
    return [leftIndex, rightIndex];
};

const arrayToBinaryTreeHelper = (parent: TreeNode, array: (number | null)[], parentIndex: number): void => {
    const [leftIndex, rightIndex] = getNextIndex(parentIndex);
    if (leftIndex >= array.length) {
        return;
    }
    const leftValue = array[leftIndex];
    if (leftValue) {
        parent.left = new TreeNode(leftValue);
        arrayToBinaryTreeHelper(parent.left, array, leftIndex);
    }
    if (rightIndex >= array.length) {
        return;
    }
    const rightValue = array[rightIndex];
    if (rightValue) {
        parent.right = new TreeNode(rightValue);
        arrayToBinaryTreeHelper(parent.right, array, rightIndex);
    }
};

const arrayToBinaryTree = (array: (number | null)[]): TreeNode | null => {
    if (!array.length || !array[0]) {
        return null;
    }
    const root = new TreeNode(array[0]);
    if (array.length >= 2 && array[1]) {
        root.left = new TreeNode(array[1]);
        arrayToBinaryTreeHelper(root.left, array, 1);
    }
    if (array.length >= 3 && array[2]) {
        root.right = new TreeNode(array[2]);
        arrayToBinaryTreeHelper(root.right, array, 2);
    }
    return root;
};

const binaryTreeToArrayHelper = (parent: TreeNode, array: (number | null)[], parentIndex: number): void => {
    const [leftIndex, rightIndex] = getNextIndex(parentIndex);
    if (parent.left && parent.right) {
        array[leftIndex] = parent.left.val;
        array[rightIndex] = parent.right.val;
        binaryTreeToArrayHelper(parent.left, array, leftIndex);
        binaryTreeToArrayHelper(parent.right, array, rightIndex);
    } else if (parent.left) {
        array[leftIndex] = parent.left.val;
        binaryTreeToArrayHelper(parent.left, array, leftIndex);
    } else if (parent.right) {
        array[leftIndex] = null;
        array[rightIndex] = parent.right.val;
        binaryTreeToArrayHelper(parent.right, array, rightIndex);
    }
};

const binaryTreeToArray = (root: TreeNode | null): (number | null)[] => {
    const array = <(number | null)[]>[];
    if (!root) {
        return array;
    }
    array[0] = root.val;
    if (root.left && root.right) {
        array[1] = root.left.val;
        array[2] = root.right.val;
        binaryTreeToArrayHelper(root.left, array, 1);
        binaryTreeToArrayHelper(root.right, array, 2);
    } else if (root.left) {
        array[1] = root.left.val;
        binaryTreeToArrayHelper(root.left, array, 1);
    } else if (root.right) {
        array[1] = null;
        array[2] = root.right.val;
        binaryTreeToArrayHelper(root.right, array, 2);
    }
    return array;
};

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
