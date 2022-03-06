/**
 * Polyfill for the String.prototype.repeat function
 */
function repeat(this: String, count: number): string {
    if (count < 0) throw Error('BadInputError');
    if (count === 0) return '';
    let cache: Array<[count: number, str: string]> = [];
    cache.push([1, this.valueOf()]);
    let currCount = 1;
    let str = this.valueOf();
    while (currCount < count) {
        // O(logN) until we reach N/2 currCount
        if (currCount * 2 <= count) {
            str += str;
            currCount *= 2;
        } else {
            const diff = count - currCount;
            let left = 0;
            let right = cache.length - 1;
            // O(logM) where M = O(logN)
            while (left <= right) {
                const index = left + Math.floor((right - left) / 2);
                const [cachedCount, cachedStr] = cache[index];
                if (cachedCount > diff) {
                    right = index - 1;
                } else {
                    const nextValTooBig = index + 1 === cache.length || cache[index + 1][0] > diff;
                    const closeEnough = cachedCount === diff || nextValTooBig;
                    if (closeEnough) {
                        str += cachedStr;
                        currCount += cachedCount;
                        break;
                    } else {
                        left = index + 1;
                    }
                }
            }
        }
    }
    return str;
}

export { repeat };
