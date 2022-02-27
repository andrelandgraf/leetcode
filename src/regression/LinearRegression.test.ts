import { LinearRegressionModel } from './LinearRegression';

function pairXYValues(X: number[], Y: number[]): Array<[x: number, y: number]> {
    if (X.length !== Y.length) throw Error('bad input');
    const tuples: Array<[x: number, y: number]> = [];
    for (let i = 0; i < X.length; i += 1) {
        tuples.push([X[i], Y[i]]);
    }
    return tuples;
}

describe('linear regression using least squares', () => {
    test('simple case sunshine and icecream', () => {
        const hoursOfSunshine = [2, 3, 5, 7, 9];
        const icecreamSold = [4, 5, 7, 10, 15];
        const input = pairXYValues(hoursOfSunshine, icecreamSold);
        const model = new LinearRegressionModel(input);
        expect(model.w.toFixed(4)).toBe('1.5183');
        expect(model.b.toFixed(4)).toBe('0.3049');
    });
});
