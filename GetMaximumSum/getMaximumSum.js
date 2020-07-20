function getMaximumSum(triangle) {
    for (let x = triangle.length - 2; x >= 0; x--)
        for (let i = 0; i <= x; i++)
            triangle[x][i] = parseInt(triangle[x][i]) + Math.max(parseInt(triangle[x + 1][i]), parseInt(triangle[x + 1][i + 1]));

    return triangle[0][0];
}

module.exports = getMaximumSum;