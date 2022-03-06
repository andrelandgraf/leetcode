/**
 * Return indexes of two values that equal target
 * Brute force (two nested loops):
 *  - Time complexity: O(N^2)
 *  - Space complexity: O(1)
 * Performant alternatives:
 *  - Sort O(NlogN) and Traverse once O(N) from both sides => O(NlogN)
 * Even better:
 *  - Time complexity: Traverse O(N) + Traverse O(N) => O(N)
 *  - Space complexity: O(N) since we create a map including all elements
 *
 * @returns {Array} the tuple of indexes based on the unsorted input
 */
function twoSum(nums: number[], target: number): number[] {
    const values: Map<number, number[]> = new Map();
    // O(N)
    for (let i = 0; i < nums.length; i += 1) {
        let curr = values.get(nums[i]);
        if (!curr) {
            curr = [];
        }
        curr.push(i);
        values.set(nums[i], curr);
    }
    // O(N) if we don't find a match, otherwise always better than O(N/2)
    for (let i = 0; i < nums.length; i += 1) {
        const diff = target - nums[i];
        const matches = values.get(diff);
        // Worst case: O(N), usually O(1)
        const index = matches?.find((idx) => idx !== i);
        if (index) {
            return [i, index];
        }
    }
    return [];
}

export default twoSum;
