const getMaximumSum = require('./getMaximumSum');

const triangle1 = [
  [5],
  [9, 6],
  [4, 6, 8],
  [0, 7, 1, 5]
];

describe('MAXIMUM SUM', () => {
    test('Total equal 27', () => {
        expect(getMaximumSum(triangle1)).toBe(27);
    });
});