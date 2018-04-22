export const validColors = ["red", "blue", "green", "yellow", "magenta"]

export const isMoveValid = (update, game) => {
    if (hasKey(update,"board") === true){
        if (numberOfMoves(update.board, game.board) > 1) return false
        else return true
    }
    else return true
}

export const hasKey = (update, key) => {
    if(Object.keys(update).includes(key) === true) return true
    else return false
}

export const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * validColors.length)
    return validColors[randomNumber]
}

const numberOfMoves = (board1, board2) => {
    return board1.map( (row, y) => row.map( (cell, x) => 
            if(cell !== board2[y][x] ) return 1))
            .reduce((acc, curV) => acc.concat(curV))
            .filter( (value) => value > 0).length
}