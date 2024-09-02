function isRobotBounded(instructions) {
    // Time O(n)
    const n = instructions.length;
    let x = 0, y = 0;
    let i = 0, dir = [[0,1], [1,0], [0,-1], [-1,0]]; // north, east, south, west
    for (let j = 0; j < n; j++) {
        if (instructions[j] == 'R') {
            i = (i + 1) % 4;
        } else if (instructions[j] == 'L') {
            i = (i - 1 < 0) ? 3 : (i - 1);
        } else {
            x += dir[i][0];
            y += dir[i][1];
        }
    }
    return (x == 0 && y == 0) || i > 0;
};