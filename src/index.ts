console.log('Hello World! 👋');

console.log('I just finished my M.Sc. and now I am stepping up my leetcode game! 🚀');

console.log('run "npm run test" to trigger all exercise test cases');

const solve = (problemDifficulty: number, solutionScore: number) => problemDifficulty < solutionScore;

const catalysts = ['coffee', 'rest', 'hydration', 'backgroundMusic'];
const catalystScores = [5, 5, 3, -1];

const exercise = (problemDifficulty: number, solutionScore: number = 0): string => {
    if (solve(problemDifficulty, solutionScore)) {
        return 'success!';
    }
    for (let i = 0; i < catalysts.length; i += 1) {
        return `${catalysts[i]} => ${exercise(problemDifficulty, solutionScore + catalystScores[i])}`;
    }
    return 'keep trying!';
};

console.log(`And don't forget the formula of success: ${exercise(20, 0)}`);
