'use strict';

const gameSelect = document.getElementById('questionsSelection');
const gameStartForm = document.getElementById('gameStartForm');
const playerOneIconSelector = document.getElementById('playerOneIcon');
const playerTwoIconX = document.getElementById('playerTwoIconX');
const playerTwoIconO = document.getElementById('playerTwoIconO');
var newGame;


var populateQuizzes = function(){
    if(localStorage['quizBank']) {
        let quizzes = JSON.parse(localStorage['quizBank']);
        for(var key in quizzes) {
            const newEle = document.createElement('option');
            newEle.textContent = key;
            gameSelect.appendChild(newEle);
        }
    }
};

var handleGameStartForm = function(event){
    // game info
    const p1 = event.target.playerOne.value.toLowerCase();
    const p2 = event.target.playerTwo.value.toLowerCase();
    const p1Icon = event.target.playerOneIconX.checked ? event.target.playerOneIconX.value :
        event.target.playerOneIconO.value;
    const p2Icon = event.target.playerTwoIconO.checked ? event.target.playerOneIconO.value :
        event.target.playerOneIconX.value;
    const selectedQuiz = gameSelect.options[gameSelect.selectedIndex].text;
    let player1 = {};
    let player2 = {};


    if (localStorage['playerBank']) { // check to see if players already exist
        const players = JSON.parse(localStorage['playerBank']);
        players.forEach((play) => {
            const name = play.userName.toLowerCase();
            if(name === p1){
                player1 = play;
                player1.icon = p1Icon;
            } else if (name === p2){
                player2 = play;
                player2.icon = p2Icon;
            }
        });
        updateLocalStorage('playerBank', players);
        console.log('players', players);
        if(!Object.keys(player1).length){ // create them if they arent in the playerBank
            //create players
            player1 = new Player(p1, p1Icon); // eslint-disable-line
        }
        if(!Object.keys(player2).length) {
            player2 = new Player(p2, p2Icon); // eslint-disable-line
        }

    } else { // no local storage
        //create players
        player1 = new Player(p1, p1Icon); // eslint-disable-line
        player2 = new Player(p2, p2Icon); // eslint-disable-line
    }
    // create new game from inputs
    createGame(selectedQuiz, player1, player2);
};

function createGame(quiz, play1, play2){
    // create new game from inputs
    newGame = new Game(quiz, play1, play2); // eslint-disable-line

    //add game to local storage
    var games = JSON.parse(localStorage['games']);
    games.push(newGame);
    var gamesToBeSaved = JSON.stringify(games);
    localStorage['games'] = gamesToBeSaved;
}

var handleIconSelection = function(event){ // controls icon selection, so users cannot be the same icon
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
};

if(gameSelect){
    populateQuizzes();
    // event listener for game start form
    playerOneIconSelector.addEventListener('click', handleIconSelection);
    gameStartForm.addEventListener('submit', handleGameStartForm);
}






