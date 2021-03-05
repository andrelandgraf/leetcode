import TreeNode from './TreeNode';

function getCheapestCost(rootNode: TreeNode) {
    if (!rootNode.children.length) {
        return rootNode.cost;
    }
    let minOption = Number.MAX_VALUE;
    for (let i = 0; i < rootNode.children.length; i += 1) {
        const sum = getCheapestCost(rootNode.children[i]);
        if (sum < minOption) {
            minOption = sum;
        }
    }
    return minOption + rootNode.cost;
}

export default getCheapestCost;
