/* eslint-disable no-undef */
'use strict';
// global variables
var winConditions = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [3,4,5],[6,7,8], [2,4,6]];
// track the choices each player makes
var playerOneChoices = [];
var playerTwoChoices = [];

var gridSquares = document.getElementsByClassName('gridSquare');
/* eslint-disable no-unused-vars */
var questionBox = document.getElementById('question');
var resultsBox = document.getElementById('resultsBox');

if (!localStorage['games']){
    localStorage.setItem('games', JSON.stringify([]));
}

var saveTestQuestionsInBank = function() {
    new Quiz('TEST');
    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('TEST', 'multipleChoice', '1What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '2What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '3What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '4What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '5What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '6What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '7What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '8What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '9What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '10What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '11What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '12What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '13What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '14What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '15What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '16What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '17What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '18What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);

    new Question('TEST', 'multipleChoice', '19What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Makrup Language', 'Hyper Tools Markup Language'], 2);
};



var saveDefaultQuestionsInBank = function() {
    new Quiz('DEFAULT');

    new Question('DEFAULT', 'MultipleChoice', 'In HTML, what tag is used for indicating superscript?', ['<superscript>', '<super>', '<sup>', '<script>'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);
    new Question('DEFAULT', 'MultipleChoice', 'What symbol would you use in front of a CSS selector to target a class attribute?', ['#', '.', '>', '[class]'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'Which of the following is NOT a data type in JavaScript?', ['number', 'string', 'variable', 'boolean'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'How would you access the 3rd element in the array \'fruits\'? ', ['fruits[3]', 'fruits{2}', 'fruits(3)', 'fruits[2]'], 3);

    new Question('DEFAULT', 'MultipleChoice', 'Which of the following is NOT a type of list in HTML?', ['numbered', 'ordered', 'unordered', 'definition'], 0);
    new Question('DEFAULT', 'MultipleChoice', 'In JavaScript, which of the following is NOT an arithmetic operator?', ['/', 'x', '+', '-'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In Javascript, what do you call information that is passed to a function as inputs?', ['variables', 'values', 'parameters', 'statements'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'In CSS, which of the following is NOT a position value?', ['relative', 'absolute', 'fixed', 'float'], 3);
    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which tag would you use to create a hyperlink?', ['<a>', '<link>', '<hlink>', '<src>'], 0);

    new Question('DEFAULT', 'MultipleChoice', 'What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Tools Markup Language'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'What does CSS stand for?', ['Code Style Studio', 'Cascading Style Sheets', 'Cool Stylish Suffering', 'Can\'t Style Sh*t'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which tag is used to add an image to a web page?', ['<image>', '<a>', '<img>', '<pic>'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'From outside in, what is the order of the CSS Box Model?', ['Content, Margin, Border, Padding', 'Margin, Border, Padding, Content', 'Margin, Padding, Border, Content', 'Border, Margin, Padding, Content'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In CSS, you can select a color by using:', ['RGB value', 'Hex value', 'Name of the color', 'All of the above'], 3);

    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which of the following is NOT an input type?', ['radio', 'input', 'text', 'submit'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In JavaScript, how can you find the number of properties in an object \'objectName\'?', ['objectName.length', 'Object.keys(objectName).length', 'lengthOf(objectName)', 'objectName.properties.howMany'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In JavaScript, which of the following is NOT a standard error type?', ['Syntax error', 'Type error', 'Range error', 'Format error'], 3);

    new Question('DEFAULT', 'TrueFalse', 'In JavaScript, a variable name can begin with a number.', ['True', 'False'], 1);
    new Question('DEFAULT', 'TrueFalse', 'It is possible to link 2 or more style sheets to a single HTML document.', ['True', 'False'], 0);
    new Question('DEFAULT', 'TrueFalse', 'JavaScript and Java are the same programming language.', ['True', 'False'], 1);
    new Question('DEFAULT', 'TrueFalse', 'In Javascript if you do not know exactly how many times a code should be run, you can use a while loop.', ['True', 'False'], 0);
    new Question('DEFAULT', 'TrueFalse', 'In Javascript, a while loop is a special type of for loop.', ['True', 'False'], 1);

    new Question('DEFAULT', 'TrueFalse', 'What would be the boolean value of the statement (5 < 4 || 12 > 10)?', ['True', 'False'], 0);
    new Question('DEFAULT', 'TrueFalse', 'Pair programming is more likely to produce bugs than writing code individually.', ['True', 'False'], 1);
    new Question('DEFAULT', 'TrueFalse', 'In JavaScript, a variable declared inside of a function is a global variable.', ['True', 'False'], 1);
    new Question('DEFAULT', 'TrueFalse', 'In JavaScript, objects are made up of properties and methods.', ['True', 'False'], 0);
};

saveDefaultQuestionsInBank();
saveTestQuestionsInBank();
console.log('Test Question Bank Saved');


// adding event listeners for the boxes when the DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    //get the games in localStorage
    var gamesInLocalStorage = JSON.parse(localStorage['games']);

    if(gamesInLocalStorage.length && gridSquares.length) {
        // this game is always the last game that is saved in local storage
        var aGame = gamesInLocalStorage[gamesInLocalStorage.length - 1];
        var thisGame = new Game(aGame.quizName, aGame.playerOne, aGame.playerTwo);
        thisGame.grid.initializeGrid(thisGame.questionBank);

        //show first player's turn
        showCurrentPlayerOnDom(thisGame.playerOne.userName);

        //update icons for grid
        populateGridIconsOnDom(thisGame);
    }

});

////////////////////// helper functions //////////////////////

var populateGridIconsOnDom = function(thisGame) {
    var numWins = 0;
    var cells = thisGame.grid.cells;

    for(var i = 0; i < cells.length; i++) {
        var gridSquareEL = gridSquares[i];
        if (!cells[i]['winner']) {
            if (!cells[i].mcQuestions.length) {
                gridSquares[i].classList.add('tie-breaker-square');
            }
            //add event lister for click
            gridSquares[i].addEventListener('click', (event) => clickHandler(event, thisGame));
            gridSquareEL.innerHTML = '<i class="fas fa-question-circle"' + 'id=' + i + '></i>';
        } else {
            numWins++;
            if(cells[i]['winnerIcon'] === 'O') {
                gridSquareEL.innerHTML = '<i class="fas fa-circle"' + 'id=' + i + '></i>';
            } else {
                gridSquareEL.innerHTML = '<i class="fas fa-times"' + 'id=' + i + '></i>';
            }

            //remove event Listener
            gridSquares[i].style.pointerEvents = 'none';

            if(numWins === 9){
                //end Game
                stopGame(thisGame); // stop game will have the populate results
            }
        }
    }
};

//handles game flow logic once a cell on grid is clicked
var clickHandler = (e, thisGame) => {
    //get index of grid cell clicked
    var cellIndex = e.target.id;
    console.log(`cell index is ${cellIndex}`);

    //determine active player
    let activePlayer;
    let inactivePlayer;

    if(thisGame.isPlayerOneTurn) {
        activePlayer = thisGame.playerOne;
        inactivePlayer = thisGame.playerTwo;
    } else {
        activePlayer = thisGame.playerTwo;
        inactivePlayer = thisGame.playerOne;
    }
    console.log(`activePlayer is ${activePlayer.userName}`);

    //get the cell data for the grid cell index of index of cell clicked on front end
    var cellData = thisGame.grid.cells[cellIndex];
    // console.log(cellData);

    //set the question - if no more MC questions in cell, get the tie breaker
    var question;

    if (cellData.mcQuestions.length) {
        question = cellData.mcQuestions[cellData.mcQuestions.length - 1];
        console.log(cellData.mcQuestions.length);
    } else {
        //tie breaker question
        question = cellData.tieBreakerQuestion[cellData.tieBreakerQuestion.length - 1];
        console.log(cellData.mcQuestions.length);
    }

    //display question to user
    showQuestionForm(question);
    showLastPlayInfoOnDom('Waiting on your response....');

    //add event listener to form submit button
    var userResponseButton = document.getElementById('user-response-button');
    if(userResponseButton){
        userResponseButton.addEventListener('click', (e) => handleQuestionResponse(e, cellData, question, activePlayer, inactivePlayer, thisGame));
    }
};

// function to populate a form for the question when a square is clicked.
var showQuestionForm = function(question) {
    var grid = document.getElementById('grid');
    grid.style.pointerEvents = 'none';

    console.log('Displaying Question Form!');
    let questionDiv = document.getElementById('questionBox');
    questionDiv.style.display = 'block';
    questionDiv.classList.add('showQuestionBox');
    let questionToAsk = question.questionQuestion;
    let questionResponse = question.questionResponses;
    let questionShowForm = document.getElementById('questionShowForm');
    questionShowForm.innerHTML = '';
    let elLabel = document.createElement('label');
    let br = document.createElement('br');
    let elSubmit = document.createElement('button');
    elLabel.innerHTML = questionToAsk;
    elLabel.setAttribute('for', 'questionResponses');
    questionShowForm.appendChild(elLabel);
    questionShowForm.appendChild(br);
    for(let i = 0; i < questionResponse.length; i++){
        let br = document.createElement('br');
        let radioLabel = document.createElement('label');
        let elRadio = document.createElement('input');
        radioLabel.setAttribute('for', 'qestionResponses');
        radioLabel.textContent = questionResponse[i];
        elRadio.setAttribute('type', 'radio');
        elRadio.setAttribute('name', 'questionResponses');
        elRadio.setAttribute('value', i);
        if(i === 0) {
            elRadio.setAttribute('checked', true);
        }
        questionShowForm.appendChild(br);
        questionShowForm.appendChild(elRadio);
        questionShowForm.appendChild(radioLabel);
        questionShowForm.appendChild(br);
    }
    //elSubmit.setAttribute('innerText', 'submit');
    elSubmit.setAttribute('id', 'user-response-button');
    elSubmit.textContent = 'Submit Answer';
    questionShowForm.appendChild(elSubmit);
};

// checks to see if win condition exists and returns a boolean
var hasWinConditions = (winner) => {
    console.log('Checking to see if player has a win condition!');
    // array to be checked for win status
    var arrayToCheck;
    if (winner === 'PlayerOne'){
        arrayToCheck = playerOneChoices;
    } else {
        arrayToCheck = playerTwoChoices;
    }

    if(arrayToCheck.length < 3){
        return false;
    }

    var hasWinner;

    // loop through the win conditions
    for(var i = 0; i < winConditions.length; i++) {
        let innerArr = winConditions[i];

        // keep a point system to check if a player has won. 3 points = a win
        var points = 0;

        // loop through the players choices arrays and check against the win condition arrays[i]
        for(var j = 0; j < innerArr.length; j++) {
            console.log(innerArr);
            if(arrayToCheck.includes(innerArr[j])) {
                //increase points of player
                points++;
                if(points === 3){
                    return true;
                }
            }
        }
    }

    return hasWinner;
};

//processes user input form the form
var handleQuestionResponse = (e, cellData, question, activePlayer, inactivePlayer, thisGame) => {
    e.preventDefault();
    // handle what to do with the response

    var userResponse;
    var message;

    for (var i = 0; i < question.questionResponses.length; i++) {
        if(e.target.form[i].checked){
            userResponse = i;
        }
    }
    var winner;

    if(question.correctAnswer === userResponse) {
        if(question.questionType === 'TrueFalse') {
            gridSquares[cellData.id].classList.remove('tie-breaker-square');
        }
        console.log('question was answered correctly');

        message = `Way to go, ${activePlayer.userName.toUpperCase()}, you earned that square`;
        showLastPlayInfoOnDom(message);

        cellData.winner = activePlayer;
        cellData.winnerIcon = activePlayer.icon;
        if (thisGame.isPlayerOneTurn) {
            playerOneChoices.push(cellData.id);
            winner = 'PlayerOne';
        } else {
            playerTwoChoices.push(cellData.id);
            winner = 'PlayerTwo';
        }
    } else {
        console.log('question was NOT answered correctly');

        //display message on DOM
        message = `Hard Luck ${activePlayer.userName.toUpperCase()}, that was not correct.`;
        gridSquares[cellData.id].classList.remove('tie-breaker-square');
        showLastPlayInfoOnDom(message);

        if(question.questionType === 'TrueFalse') {
            cellData.winner = inactivePlayer;
            cellData.winnerIcon = inactivePlayer.icon;

            //display message on DOM
            message = `You stole that square, ${inactivePlayer.userName.toUpperCase()}`;
            showLastPlayInfoOnDom(message);

            if (!thisGame.isPlayerOneTurn) {
                playerOneChoices.push(cellData.id);
                winner = 'PlayerOne';
            } else {
                playerTwoChoices.push(cellData.id);
                winner = 'PlayerTwo';
            }
        }
    }

    if(question.questionType === 'TrueFalse'){
        cellData.tieBreakerQuestion.pop();
    } else {
        cellData.mcQuestions.pop();
    }

    if(winner) {
        var gameOver = hasWinConditions(winner);
    }

    let questionDiv = document.getElementById('questionBox');
    questionDiv.style.display = 'none';
    if(gameOver) {
        console.log(' active player has a win condition');
        if(cellData['winnerIcon'] === 'O') {
            gridSquares[cellData.id].innerHTML = '<i class="fas fa-circle"' + 'id=' + cellData.id + '></i>';
        } else {
            gridSquares[cellData.id].innerHTML = '<i class="fas fa-times"' + 'id=' + cellData.id + '></i>';
        }

        stopGame(thisGame, activePlayer, inactivePlayer);
    } else {
        console.log('does not have a win condition');
        thisGame.switchTurns();

        //update dom with next player
        showCurrentPlayerOnDom(inactivePlayer.userName);

        //add clicks events back to grid
        var grid = document.getElementById('grid');
        grid.style.pointerEvents = 'auto';

        //update grid icons
        populateGridIconsOnDom(thisGame);
    }
};

// end the game
var stopGame = (thisGame, winner, otherPlayer) => {
    console.log('ending game!');
    var grid = document.getElementById('grid');
    grid.style.pointerEvents = 'none';

    var gameButtons = document.getElementById('game-buttons');
    var winnerTitle = document.getElementById('winnerTitle');
    var drawTitle = document.getElementById('draw');


    // updated player object with a win
    if(winner){
        winner.numWins++;
        otherPlayer.numLosses++;
        winnerTitle.textContent = `${winner.userName} has won this match!`;
        console.log(`${winner.userName} has won this match!`);
    } else {
        thisGame.playerOne.numDraws++;
        thisGame.playerTwo.numDraws++;
        drawTitle.textContent = `It's a draw between ${thisGame.playerOne.userName} and ${thisGame.playerTwo.userName}.`;
        console.log('It\'s a tie');
    }

    // show the results box
    resultsBox.classList.remove('hideResultsBox');
    resultsBox.classList.add('showResultsBox');

    //increase amount of games played
    thisGame.playerOne.totalGames++;
    thisGame.playerTwo.totalGames++;

    //update game status
    thisGame.isOver = true;
    updateGameInfoInlocalStorage(thisGame);
    updatePlayerInfoInLocalStorage(thisGame);

    //show option to view leaderboard
    var buttonEl = document.createElement('button');
    buttonEl.innerText = 'View Leaderboard';
    buttonEl.setAttribute('id', 'leaderboard-button');
    buttonEl.setAttribute('onclick', 'window.location.href = \'leaderboard.html\';');
    gameButtons.appendChild(buttonEl);
};

//updates player infor in local storage
var updatePlayerInfoInLocalStorage = function(thisGame) {
    console.log('Updating Player in Local storage');
    //add player back to local storage
    var playerBank = JSON.parse(localStorage['playerBank']);
    for (var i = 0; i < playerBank.length; i++) {
        if(playerBank[i].userName === thisGame.playerOne.userName) {
            playerBank[i] = thisGame.playerOne;
        } else if (playerBank[i].userName === thisGame.playerOne.userName) {
            playerBank[i] = thisGame.playerTwo;
        }
    }

    localStorage.setItem('playerBank', JSON.stringify(playerBank));
};

//updates game info in local storage
var updateGameInfoInlocalStorage = function(thisGame) {
    console.log('Updating Game information in Local Storage');
    // save game information in local storage
    var games = JSON.parse(localStorage['games']);
    //this Game is always the last game in memory
    games.pop();
    games.push(thisGame);
    var gamesToBeSaved = JSON.stringify(games);
    localStorage['games'] = gamesToBeSaved;
};

//displays Name of active player to Dom;
var showCurrentPlayerOnDom = function(userName){
    // write active Player to Dom
    var currentPlayerName = document.getElementById('current-player-name');
    currentPlayerName.textContent = userName.toUpperCase();
};

//stats info on dom
var showLastPlayInfoOnDom = function(message){
    // write active Player to Dom
    var lastPlayInfo = document.getElementById('last-play-info');
    lastPlayInfo.textContent = message;
};

var updateLocalStorage = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};


// transition handler for the play gameboard
var squareWrapper = document.querySelectorAll('.loading');

for(let i = 0; i < squareWrapper.length; i++){
    setTimeout(function(){
        squareWrapper[i].classList.remove('loading');
    }, i * 300);
}

