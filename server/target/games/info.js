"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = ['red', 'blue', 'green', 'yellow', 'magenta'];
exports.randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};
exports.moves = (board1, board2) => {
    board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length;
};
//# sourceMappingURL=info.js.map