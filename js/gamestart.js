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
    // game info
    const p1 = event.target.playerOne.value;
    const p2 = event.target.playerTwo.value;
    const selectedQuiz = gameSelect.options[gameSelect.selectedIndex].text;
    let player1, player2 = {};


    if (localStorage['playerBank']) { // check to see if players already exist
        const players = JSON.parse(localStorage['playerBank']);
        console.log(players.includes('Peter'));
        players.forEach((play) => {
            if(play.userName === p1){
                player1 = play;
            } else if (play.userName === p2){
                player2 = play;
            }
        });

    } else {
        //create players
        player1 = new Player(p1);
        player2 = new Player(p2);
    }
    // create new game from inputs
    const newGame = new Game(selectedQuiz, player1.userName, player2.userName);

    //reset form
    gameStartForm.reset();


    // start game
    newGame.playGame();

}

function handleIconSelection(event){ // controls icon selection, so users cannot be the same icon
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

