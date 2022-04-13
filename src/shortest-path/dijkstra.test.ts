import { Edge, Node, Graph } from './graph';
import { dijkstra } from './dijkstra';

describe('use dijkstra to calculate shortest paths', () => {
    /**
     * Input:
     *   Start: A, Target: G
     *   Graph: A -2-> B -2-> G
     *            -1-> C -1-> D -1-> F
     *                   -2-> E -2-> G
     * Output: A -> B -> G
     */
    test('simple graph', () => {
        const graph = new Graph();
        const nodeA = new Node('A');
        const nodeB = new Node('B');
        const nodeC = new Node('C');
        const nodeD = new Node('D');
        const nodeE = new Node('E');
        const nodeF = new Node('F');
        const nodeG = new Node('G');

        nodeA.edges.push(new Edge(2, nodeB));
        nodeA.edges.push(new Edge(1, nodeC));

        nodeB.edges.push(new Edge(2, nodeG));

        nodeC.edges.push(new Edge(1, nodeD));
        nodeC.edges.push(new Edge(2, nodeE));

        nodeD.edges.push(new Edge(1, nodeF));
        nodeE.edges.push(new Edge(2, nodeG));

        graph.addNode(nodeA);
        graph.addNode(nodeB);
        graph.addNode(nodeC);
        graph.addNode(nodeD);
        graph.addNode(nodeE);
        graph.addNode(nodeF);
        graph.addNode(nodeG);

        const map = dijkstra(nodeA, graph);
        expect(map.get('A')?.distance).toEqual(0);
        expect(map.get('G')?.distance).toEqual(4);
    });
    test('edge case: empty graph', () => {
        const graph = new Graph();
        const nodeA = new Node('A');
        const map = dijkstra(nodeA, graph);
        expect(map.get('A')).toBeUndefined();
    });
    test('edge case: graph with one node', () => {
        const graph = new Graph();
        const nodeA = new Node('A');
        graph.addNode(nodeA);
        const map = dijkstra(nodeA, graph);
        expect(map.get('A')?.distance).toEqual(0);
    });
    test('edge case: graph with two nodes', () => {
        const graph = new Graph();
        const nodeA = new Node('A');
        const nodeB = new Node('B');
        nodeA.edges.push(new Edge(1, nodeB));
        graph.addNode(nodeA);
        graph.addNode(nodeB);
        const map = dijkstra(nodeA, graph);
        expect(map.get('A')?.distance).toEqual(0);
        expect(map.get('B')?.distance).toEqual(1);
    });
});
