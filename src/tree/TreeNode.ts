export default class TreeNode {
    cost: number;
    children: TreeNode[];

    constructor(cost: number) {
        this.cost = cost;
        this.children = [];
    }
}
