import TreeNode from './TreeNode';

export const arrayToBinaryTree = (array: (number | null)[]): TreeNode | null => {
    if (!array.length || !array[0]) {
        return null;
    }
    const root = new TreeNode(array[0]);
    const nextChildrens = <TreeNode[]>[root];
    for (let i = 1; i < array.length; i += 1) {
        if (i % 2 === 0) {
            continue;
        }
        const parent = nextChildrens.splice(0, 1)[0];
        const leftValue = array[i];
        if (leftValue !== null) {
            const leftNode = new TreeNode(leftValue);
            parent.left = leftNode;
            nextChildrens.push(leftNode);
        }
        if (i + 1 < array.length) {
            const rightValue = array[i + 1];
            if (rightValue !== null) {
                const rightNode = new TreeNode(rightValue);
                parent.right = rightNode;
                nextChildrens.push(rightNode);
            }
        }
    }
    return root;
};

export const binaryTreeToArray = (root: TreeNode | null): (number | null)[] => {
    const array = <(number | null)[]>[];
    if (!root) {
        return array;
    }
    const nodesToVisit = <TreeNode[]>[root];
    array.push(root.val);
    while (nodesToVisit.length) {
        const parent = nodesToVisit.splice(0, 1)[0];
        const leftNode = parent.left;
        const rightNode = parent.right;
        if (leftNode) {
            array.push(leftNode.val);
            nodesToVisit.push(leftNode);
        } else {
            array.push(null);
        }
        if (rightNode) {
            array.push(rightNode.val);
            nodesToVisit.push(rightNode);
        } else {
            array.push(null);
        }
    }
    // removes unneeded endings nulls
    for (let i = array.length - 1; i >= 0; i -= 1) {
        if (array[i] === null) {
            array.splice(i, 1);
        } else {
            break;
        }
    }
    return array;
};
