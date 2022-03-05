/**
 * Return indexes of two values that equal target
 * Brute force (two nested loops):
 *  - Time complexity: O(N^2)
 *  - Space complexity: O(1)
 * Performant alternative:
 *  - Time complexity: Sort O(NlogN) + Traverse O(N) + Traverse O(N) => O(NlogN)
 *  - Space complexity: O(N) since we create a sorted copy
 *
 * @returns {Array} the tuple of indexes based on the unsorted input
 */
function twoSum(nums: number[], target: number): number[] {
    if (nums.length < 2) {
        return [];
    }
    const sortedNums = [...nums].sort((a, b) => a - b); // copy required to remember old indices
    let left = 0;
    let right = sortedNums.length - 1;
    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right];
        if (sum === target) {
            const res: Array<number> = [];
            let addedLeft = false;
            let addedRight = false;
            for (let i = 0; i < nums.length; i += 1) {
                if (!addedLeft && nums[i] === sortedNums[left]) {
                    addedLeft = true;
                    res.push(i);
                } else if (!addedRight && nums[i] === sortedNums[right]) {
                    addedRight = true;
                    res.push(i);
                }

                if (addedLeft && addedRight) {
                    return res;
                }
            }
        } else if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return [];
}

export default twoSum;
