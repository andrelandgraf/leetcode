import getCheapestCost from './getCheapestCost';
import TreeNode from './TreeNode';

describe('get cheapest costs', () => {
    /**
     * Input Tree
     *              0
     *      1               2
     *  1       1       5       1
     *      1       1
     */
    test('simple binary tree', () => {
        const root = new TreeNode(0);
        const left = new TreeNode(1);
        const right = new TreeNode(2);
        root.children = [left, right];
        const leftLeft = new TreeNode(1);
        const leftRight = new TreeNode(1);
        left.children = [leftLeft, leftRight];
        const leftRightLeft = new TreeNode(1);
        const leftRightRight = new TreeNode(1);
        leftRight.children = [leftRightLeft, leftRightRight];
        const rightLeft = new TreeNode(5);
        const rightRight = new TreeNode(1);
        right.children = [rightLeft, rightRight];
        expect(getCheapestCost(root)).toBe(2);
    });
    /**
     * Input LinkedList Tree
     * 0 - 1 - 1 - 2 - 5 - 1
     */
    test('simple binary tree', () => {
        const root = new TreeNode(0);
        const one = new TreeNode(1);
        const two = new TreeNode(1);
        const three = new TreeNode(2);
        const four = new TreeNode(5);
        const five = new TreeNode(1);
        root.children = [one];
        one.children = [two];
        two.children = [three];
        three.children = [four];
        four.children = [five];
        expect(getCheapestCost(root)).toBe(10);
    });
});
