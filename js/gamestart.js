'use strict';

const gameSelect = document.getElementById('questionsSelection');
const gameStartForm = document.getElementById('gameStartForm');
const playerOneIconSelector = document.getElementById('playerOneIcon');
const playerTwoIconX = document.getElementById('playerTwoIconX');
const playerTwoIconO = document.getElementById('playerTwoIconO');

function populateQuizzes(){
    if(localStorage['quizBank']) {
        let quizzes = JSON.parse(localStorage['quizBank']);
        quizzes.forEach((quiz) => {
            const newEle = document.createElement('option');
            newEle.textContent = quiz.quizName;
            gameSelect.appendChild(newEle);
        });
    }
}

function handleGameStartForm(event){
    event.preventDefault();
    // game info
    const p1 = event.target.playerOne.value;
    const p2 = event.target.playerTwo.value;
    const selectedQuiz = gameSelect.options[gameSelect.selectedIndex].text;


    //create players
    const player1 = new Player(p1);
    const player2 = new Player(p2);
    // create new game from inputs
    const newGame = new Game(selectedQuiz, player1.userName, player2.userName);

    // start game
    newGame.playGame();

    //reset form
    gameStartForm.reset();
}

function handleIconSelection(event){
    const icon = event.target.value;
    if(icon === 'O'){
        playerTwoIconX.disabled = false;
        playerTwoIconX.checked = true;
        playerTwoIconO.disabled = true;
    } else {
        playerTwoIconO.disabled = false;
        playerTwoIconO.checked = true;
        playerTwoIconX.disabled = true;
    }
}

populateQuizzes();

// event listener for game start form
gameStartForm.addEventListener('submit', handleGameStartForm);
playerOneIconSelector.addEventListener('click', handleIconSelection);

