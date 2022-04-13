class Edge {
    weight: number;
    to: Node;
    constructor(weight: number, to: Node) {
        this.weight = weight;
        this.to = to;
    }
}

class Node {
    name: string;
    edges: Edge[];
    constructor(name: string) {
        this.name = name;
        this.edges = [];
    }
}

class Graph {
    nodes: Map<string, Node>;
    constructor() {
        this.nodes = new Map();
    }
    addNode(node: Node) {
        this.nodes.set(node.name, node);
    }
    getNode(name: string): Node | undefined {
        return this.nodes.get(name);
    }
}

export { Graph, Node, Edge };
