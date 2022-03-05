/**
 * Time complexity: O(NlogN) + O(N^2 * logN) => O(N^3)
 * Space complexity: Sorting in place O(1) + Storing M quadruplets O(M) => O(M)
 */
function fourSum(nums: number[], target: number): number[][] {
    if (nums.length < 4) {
        return [];
    }

    nums.sort((a, b) => a - b); // O(NlogN)

    const uniqueQuadruplets: Record<string, Array<number>> = {};
    for (let i = 0; i < nums.length - 3; i += 1) {
        for (let j = nums.length - 1; j > i + 2; j -= 1) {
            let left = i + 1;
            let right = j - 1;
            while (left < right) {
                //
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    const quadruplet = [nums[i], nums[left], nums[right], nums[j]];
                    if (!uniqueQuadruplets[quadruplet.toString()]) {
                        uniqueQuadruplets[quadruplet.toString()] = quadruplet;
                    }
                    left += 1;
                    right -= 1;
                } else if (sum < target) {
                    left += 1;
                } else {
                    right -= 1;
                }
            }
        }
    }
    return Object.values(uniqueQuadruplets);
}

export { fourSum };
