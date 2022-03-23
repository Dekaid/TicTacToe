gameControls();

function gameControls(){
    const allCell = document.querySelectorAll('.cell');
    allCell.forEach(cell => cell.addEventListener('click', cellClick));

    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', restartGame);
}
