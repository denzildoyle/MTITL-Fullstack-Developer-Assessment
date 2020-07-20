const getMaximumSum = require('./getMaximumSum');

const triangle = [
  [5],
  [9, 6],
  [4, 6, 8],
  [0, 7, 1, 5]
];

const readline = require('readline');
const fs = require('fs');

let rows = 0;
let triangleFile = new Array();

const rl = readline.createInterface({
  input: fs.createReadStream('triangle.txt')
});

rl.on('line', async(line) => {
    triangleFile[rows] = line.split(' ');
    rows++;
});

describe('MAXIMUM SUM', () => {
    test('Total equal 27', () => {
        expect(getMaximumSum(triangle)).toBe(27);
    });

    rl.on('close', (line) => {
        test('Total in File equal 732506', async () => {
            const triangleFile = await fetchData();
            expect(getMaximumSum(triangleFile)).toBe(732506);
        });
    });
});