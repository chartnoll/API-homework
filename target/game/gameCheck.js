"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validColors = ["red", "blue", "green", "yellow", "magenta"];
exports.isMoveValid = (update, game) => {
    if (exports.hasKey(update, "board") === true) {
        if (numberOfMoves(update.board, game.board) > 1)
            return false;
        else
            return true;
    }
    else
        return true;
};
exports.hasKey = (update, key) => {
    if (Object.keys(update).includes(key) === true)
        return true;
    else
        return false;
};
exports.randomColor = () => {
    const randomNumber = Math.floor(Math.random() * exports.validColors.length);
    return exports.validColors[randomNumber];
};
const numberOfMoves = (board1, board2) => {
    return board1.map((row, y) => row.map((cell, x) => {
        if (cell !== board2[y][x])
            return 1;
    }))
        .reduce((acc, curV) => acc.concat(curV))
        .filter((value) => value > 0).length;
};
//# sourceMappingURL=gameCheck.js.map