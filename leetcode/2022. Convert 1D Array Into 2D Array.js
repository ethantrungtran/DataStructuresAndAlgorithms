function construct2DArray(original, m, n) {
    const len = original.length;
    if (len != m*n) return [];
    const res = [];
    for (let i = 0; i < m; i++) {
        const col = [];
        for (let j = 0; j < n; j++) {
            col[j] = original[n * i + j];
        }
        res[i] = col;
    }
    return res;
};

function construct2DArray2(original, m, n) {
    if (m * n !== original.length) return [];
    const res = [];

    for (let row = 0; row < m; row++) {
        res.push(original.slice(row * n, (row + 1) * n))
    }

    return res;
};