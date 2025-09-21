
function moveTrain(board, mov) {

    const n = board.length;
    const m = board[0].length
    //define las direcciones
    const directions = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1],
    };

    const headChar = '@';
    const bodyChar = 'o';
    const pointChar = '*';

    // busca la cabeza del tren
    let headRow = -1, headCol = -1;
    for (let r = 0; r < n; r++) {
        const col = board[r].indexOf(headChar);
        if (col !== -1) {
            headRow = r;
            headCol = col;
            break;
        }
    }

    // calcula la nueva posición
    const [dRow, dCol] = directions[mov];
    const newRow = headRow + dRow;
    const newCol = headCol + dCol;

    // Checa si el tren se estrella
    if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= m) {
        return 'crash'; // Train hits the wall
    }

    // Checa si el tren se mueve a un espacio vacío o come una fruta
    const targetCell = board[newRow][newCol];
    if (targetCell === bodyChar) {
        return 'crash'; // El tren choca
    } else if (targetCell === pointChar) {
        return 'eat'; // El tren come una fruta
    } else {
        return 'none'; // El tren se mueve a un espacio vacío
    }
}

    const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
    ]
  
console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
