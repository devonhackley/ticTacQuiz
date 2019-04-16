'use strict';

const gameSelect = document.getElementById('questionsSelection');
const gameStartForm = document.getElementById('gameStartForm');
function populateQuizzes(){

}

function handleGameStartForm(event){
    event.preventDefault();

    // create new game from inputs
    const newGame = new Game();

    //reset form
    gameStartForm.reset();
}
