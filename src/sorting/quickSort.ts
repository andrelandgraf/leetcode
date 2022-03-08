// Time complexity of: O(N) * O(logN) => O(NlogN)
function partialQuickSort(array: number[], from: number, to: number): number[] {
    if (!array.length || from >= to) return array;

    // Pick highest value as partition index, several different strategies exist
    let partIndex = to;
    const partValue = array[to];
    // Time complexity of O(N) for full traversal through array
    for (let i = to - 1; i >= from; i -= 1) {
        if (partValue < array[i]) {
            if (i + 1 !== partIndex) {
                const temp = array[i];
                array[i] = array[partIndex - 1];
                array[partIndex - 1] = temp;
            }
            array[partIndex] = array[partIndex - 1];
            array[partIndex - 1] = partValue;
            partIndex -= 1;
        }
    }

    // Depths-first recursion with O(logN) calls
    partialQuickSort(array, from, partIndex - 1);
    partialQuickSort(array, partIndex + 1, to);
    return array;
}

/**
 * Space compelxity: Sorts in place but O(logN) for recursive call stack (depths N is halfed every recursive call)
 * Time complexity: O(NlogN)
 */
function quickSort(array: number[]): number[] {
    return partialQuickSort(array, 0, array.length - 1);
}

export { quickSort };
