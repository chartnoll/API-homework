"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moves = (board1, board2) => {
    board1
        .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
        .reduce((a, b) => a.concat(b))
        .length;
};
exports.checkKey = (update, key) => {
    if (Object.keys(update).includes(key))
        return true;
};
exports.isBoardUpdate = (update) => {
    (Object.keys(update).includes("board1") & Object.keys(update).includes("board2"));
    console.log("even better");
};
//# sourceMappingURL=gameCheck.js.map