import MinHeap from './MinHeap';

function sortKMessedArray(arr: number[], k: number): number[] {
    if (k <= 0) {
        return arr;
    }
    const result = [];
    const minHeap = new MinHeap();
    const kArray = arr.slice(0, k);
    let lastIndexInHeap = k - 1;
    minHeap.push(...kArray);
    for (let i = 0; i < arr.length; i += 1) {
        if (lastIndexInHeap + 1 < arr.length) {
            minHeap.push(arr[lastIndexInHeap + 1]);
            lastIndexInHeap += 1;
        }
        const min = minHeap.removeMin();
        if (min) {
            result.push(min);
        }
    }
    return result;
}

export default sortKMessedArray;
