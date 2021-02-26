function withForLoops(nums: number[], target: number): number[] {
    if (!nums.length || nums.length === 1) {
        return [];
    }
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            if (i === j) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

function recursionHelper(i: number, j: number, nums: number[], target: number): number[] {
    if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
    }
    if (i < nums.length) {
        const result = recursionHelper(i + 1, j, nums, target);
        if (result.length) {
            return result;
        }
    }
    if (j < nums.length) {
        const result = recursionHelper(i, j + 1, nums, target);
        if (result.length) {
            return result;
        }
    }
    return [];
}

function withRecursion(nums: number[], target: number): number[] {
    if (!nums.length || nums.length === 1) {
        return [];
    }
    return recursionHelper(0, 0, nums, target);
}

function twoSum(nums: number[], target: number): number[] {
    const useRecursion = false;
    if (useRecursion) {
        return withRecursion(nums, target);
    }
    return withForLoops(nums, target);
}

export default twoSum;
