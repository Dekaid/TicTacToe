let gameStatus = true;
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let turns = 9;
let hasWon;

const rowsWinCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const columnsWinCondition = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const diagonalsWinCondition = [
    [0, 4, 8],
    [2, 4, 6]
];

function winnerCheck() {
    hasWon = false;

    checkRows();
    checkColumns();
    checkDiagonals();

    if (hasWon) {
        printWinner(currentPlayer);
        gameStatus = false;
        return;
    }

    if (turns === 0) {
        printDraw();
        gameStatus = false;
        return;
    }

    changePlayer();
}

function checkRows(){
    for (let i = 0; i <= 2; i++) {
        let rowA = board[rowsWinCondition[i][0]];
        let rowB = board[rowsWinCondition[i][1]];
        let rowC = board[rowsWinCondition[i][2]];
        
        if (rowA === "" || rowB === "" || rowC === "" ) {
            continue;
        }
        if (rowA === rowB && rowB === rowC) {
            hasWon = true;
            break;
        }
    }
}

function checkColumns(){
    for (let i = 0; i <= 2; i++) {
        let columnA = board[columnsWinCondition[i][0]];
        let columnB = board[columnsWinCondition[i][1]];
        let columnC = board[columnsWinCondition[i][2]];
        
        if (columnA === "" || columnB === "" || columnC === "" ) {
            continue;
        }
        if (columnA === columnB && columnB === columnC) {
            hasWon = true;
            break;
        }
    }
}

function checkDiagonals(){
    for (let i = 0; i <= 1; i++) {
        let diagonalA = board[diagonalsWinCondition[i][0]];
        let diagonalB = board[diagonalsWinCondition[i][1]];
        let diagonalC = board[diagonalsWinCondition[i][2]];
        
        if (diagonalA === "" || diagonalB === "" || diagonalC === "") {
            continue;
        }
        if (diagonalA === diagonalB && diagonalB === diagonalC) {
            hasWon = true;
            break;
        }
    }
}

function setCell(clickedCell, clickedCellIndex) {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayer() {
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
    printCurrentPlayer(currentPlayer);
}

function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("cell-index"));

    if (board[clickedCellIndex] !== "" || !gameStatus) {
        return;
    }

    turns--;

    setCell(clickedCell, clickedCellIndex);
    printTurnsLeft(turns);
    winnerCheck();
}

function restartGame() {
    gameStatus = true;
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    turns = 9

    printTurnsLeft(turns);
    printCurrentPlayer(currentPlayer);
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
}