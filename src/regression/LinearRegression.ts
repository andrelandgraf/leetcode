type LinearRegression = {
    b: number;
    w: number;
    predict: (x: number) => number;
    cost: (dataset: Array<[x: number, y: number]>) => number;
};

class LinearRegressionModel implements LinearRegression {
    b = 0;
    w = 0;

    constructor(dataset: Array<[x: number, y: number]>) {
        this.leastSquaresReg(dataset);
    }

    leastSquaresReg(dataset: Array<[x: number, y: number]>): void {
        const sumX = dataset.reduce((sum, [x]) => sum + x, 0);
        const sumY = dataset.reduce((sum, [, y]) => sum + y, 0);
        const sumXX = dataset.reduce((sum, [x]) => sum + x * x, 0);
        const sumXY = dataset.reduce((sum, [x, y]) => sum + x * y, 0);

        const n = dataset.length;
        this.w = (n * sumXY - sumX * sumY) / (n * sumXX - Math.pow(sumX, 2));
        this.b = (sumY - this.w * sumX) / n;
    }

    predict(x: number) {
        return this.b + this.w * x;
    }

    cost(dataset: Array<[x: number, y: number]>) {
        let sum = 0;
        for (let i = 0; i < dataset.length; i += 1) {
            const [x, y] = dataset[i];
            const predictedY = this.predict(x);
            sum += Math.pow(y - predictedY, 2);
        }
        return sum / dataset.length;
    }
}

export { LinearRegressionModel };
