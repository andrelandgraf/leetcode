/**
 * threeSum for target = 0
 * Time complexity: Sort O(NlogN) + Nested Loops O(N^2*logN) => O(N^2*logN)
 * Space complexity: Sorting in place O(1) + Storing M triplets O(M) => O(M)
 */
function threeSum(nums: number[]): number[][] {
    if (!nums.length || nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const triplets: Record<string, number[]> = {};
    for (let i = 0; i < nums.length - 2; i += 1) {
        for (let j = nums.length - 1; j > i + 1; j -= 1) {
            // binary search through bounded array
            let upperBound = j - 1;
            let lowerBound = i + 1;
            while (lowerBound <= upperBound) {
                const midIndex = lowerBound + Math.floor((upperBound - lowerBound) / 2);
                const sum = nums[i] + nums[midIndex] + nums[j];
                if (sum > 0) {
                    upperBound = midIndex - 1;
                } else if (sum < 0) {
                    lowerBound = midIndex + 1;
                } else {
                    const triplet = [nums[i], nums[midIndex], nums[j]]; // sorted by default
                    if (!triplets[triplet.toString()]) {
                        triplets[triplet.toString()] = triplet;
                    }
                    break;
                }
            }
        }
    }
    return Object.values(triplets);
}

export default threeSum;
