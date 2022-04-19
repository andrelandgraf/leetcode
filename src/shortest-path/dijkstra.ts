import { Graph, Node } from './graph';

type PathElement = { node: Node; distance: number; prev: Node | null };

class PrioQueue {
    elements: Array<PathElement>;
    constructor() {
        this.elements = [];
    }
    push(element: PathElement) {
        if (this.elements.find((e) => e.node.name === element.node.name)) {
            this.elements.sort((a, b) => a.distance - b.distance);
        } else {
            this.elements.push(element);
            this.elements.sort((a, b) => a.distance - b.distance);
        }
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

function drawPath(from: Node, to: Node, map: Map<string, PathElement>): Array<string> {
    const path = [to.name];
    let node = to;
    while (node.name !== from.name) {
        const element = map.get(node.name);
        if (!element) return [];
        const prevNode = element.prev;
        if (!prevNode) return [];
        path.unshift(prevNode.name);
        node = prevNode;
    }
    return path;
}

function returnResults(
    startNode: Node,
    endNode: Node,
    map: Map<string, PathElement>,
): [costs: number, path: Array<string>] {
    const path = drawPath(startNode, endNode, map);
    const costs = map.get(endNode.name)?.distance ?? Number.MAX_VALUE;
    return [costs, path];
}

function shortestPathDijkstra(startNode: Node, endNode: Node): [costs: number, path: Array<string>] {
    // A record of all found nodes and their distances to startNode
    const map = new Map<string, PathElement>();
    // The elements we have to visit
    const queue = new PrioQueue();

    // At fist, we only know startNode
    const firstElement = { node: startNode, distance: 0, prev: null };
    map.set(startNode.name, firstElement);
    queue.push(firstElement);

    while (true) {
        // Get next element to visit with min distance in queue
        const element = queue.pop();
        if (!element) return returnResults(startNode, endNode, map);
        const { node, distance } = element;
        // For each edge / neighbor of node:
        for (const edge of node.edges) {
            const neighbor = map.get(edge.to.name);
            if (!neighbor) {
                // If we don't know the neighbor, we register it and add it to the queue
                const newElement = { node: edge.to, distance: distance + edge.weight, prev: node };
                map.set(edge.to.name, newElement);
                queue.push(newElement);
            } else if (distance + edge.weight < neighbor.distance) {
                // If we found a shorter path to neighbor, we update it and add it to the queue
                neighbor.distance = distance + edge.weight;
                neighbor.prev = node;
                queue.push(neighbor);
            }

            if (edge.to.name === endNode.name) {
                // Since we are only interested in one shortest path, we can stop if we found the end node
                return returnResults(startNode, endNode, map);
            }
        }
    }
}

export { dijkstra, shortestPathDijkstra };
