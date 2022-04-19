import { Graph, Node } from './graph';

type PathElement = { node: Node; distance: number; prev: Node | null };

class PrioQueue {
    elements: Array<PathElement>;
    constructor() {
        this.elements = [];
    }
    push(element: PathElement) {
        this.elements.push(element);
        this.elements.sort((a, b) => a.distance - b.distance);
    }
    pop(): PathElement | undefined {
        return this.elements.shift();
    }
}

/**
 * Space complexity: O(1) as Dijkstra's algorithm only stores multiple references to nodes, so no additional space is needed.
 * Time complexity: O(e + n log(n)) where e is the number of edges and n is the number of nodes
 */
function dijkstra(startNode: Node, graph: Graph): Map<string, PathElement> {
    const map = new Map<string, PathElement>();
    const queue = new PrioQueue();
    for (const [nodeName, node] of graph.nodes.entries()) {
        const element = { node, distance: nodeName === startNode.name ? 0 : Number.MAX_VALUE, prev: null };
        map.set(nodeName, element);
        queue.push(element);
    }
    while (true) {
        const element = queue.pop();
        if (!element) return map;
        const { node, distance } = element;
        for (const edge of node.edges) {
            const neighbor = map.get(edge.to.name);
            if (!neighbor) continue;
            if (distance + edge.weight < neighbor.distance) {
                neighbor.distance = distance + edge.weight;
                neighbor.prev = node;
            }
        }
    }
}

function shortestPath(from: Node, to: Node, graph: Graph): [number, Array<string>] {
    const map = dijkstra(from, graph);
    const path = [to.name];
    let node = to;
    while (node.name !== from.name) {
        node = map.get(node.name)!.prev!;
        path.unshift(node.name);
    }
    return [map.get(to.name)!.distance, path];
}

export { dijkstra, shortestPath };
