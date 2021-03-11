import TreeNode from './TreeNode';

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    if (!root.left && root.right) {
        return minDepth(root.right) + 1;
    }
    if (root.left && !root.right) {
        return minDepth(root.left) + 1;
    }
    const rightDepth = minDepth(root.right) + 1;
    const leftDepth = minDepth(root.left) + 1;
    return rightDepth < leftDepth ? rightDepth : leftDepth;
}

export default minDepth;
