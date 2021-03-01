const anyMatcher = '.';
const zeroOrMoreMatcher = '*';

function assumeZeroMatcher(p: string) {
    return p.slice(2);
}

/**
 * @param s string
 * @param p pattern with * and . matchers
 */
function isMatch(s: string, p: string): boolean {
    // checks for malformed strings
    if (p && p[0] === zeroOrMoreMatcher) {
        p = p.slice(1);
    }
    if (!s || !p) {
        if (p.length >= 2 && p[1] === zeroOrMoreMatcher) {
            // remove possible zero matcher and try again
            p = assumeZeroMatcher(p);
            return isMatch(s, p);
        }
        return s === p;
    }
    if (s.length > 1 && p.length === 1) {
        return false;
    }
    if (p[0] === anyMatcher || p[0] === s[0]) {
        let pCounter = 1;
        let sCounter = 1;
        if (p.length >= 2 && p[1] === zeroOrMoreMatcher) {
            pCounter += 1;
            if (p[0] === anyMatcher) {
                // anyMatcher + zeroOrMoreMatcher allow s.length possible matches
                sCounter = s.length;
            } else {
                while (sCounter < s.length) {
                    if (s[sCounter] === s[0]) {
                        sCounter += 1;
                    } else {
                        break;
                    }
                }
            }
        }
        const possibleMatches = [];
        const iStart = p[1] === zeroOrMoreMatcher ? 0 : 1;
        p = p.slice(pCounter);
        // further restrictions to the upper boundary of sCounter could improve performance
        for (let i = iStart; i <= sCounter; i += 1) {
            possibleMatches.push(isMatch(s.slice(i), p));
        }
        return !!possibleMatches.find((match) => match);
    }
    if (p[1] === zeroOrMoreMatcher) {
        p = assumeZeroMatcher(p);
        return isMatch(s, p);
    }
    return false;
}

export default isMatch;
