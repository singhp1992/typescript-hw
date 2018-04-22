
const colors = ['red', 'blue', 'green', 'yellow', 'magenta']

export const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

export const moves = (board1, board2) => {
    board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length
}