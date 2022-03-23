const status = document.querySelector('.status');

function printTurnsLeft(turns){
   const turnsLeft = document.getElementById("turns");
   turnsLeft.innerHTML = `Turns: ${turns}` 
}

function printCurrentPlayer(currentPlayer){
    const status = document.querySelector('.status');
    status.innerHTML = `Player ${currentPlayer}'s turn`;
}

function printWinner(currentPlayer){
    const status = document.querySelector('.status');
    status.innerHTML = `Player ${currentPlayer} has won!`;
}

function printDraw(){
    const status = document.querySelector('.status');
    status.innerHTML = `Draw!`
}
