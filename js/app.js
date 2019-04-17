/* eslint-disable no-undef */
'use strict';
// global variables
var winConditions = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
// track the choices each player makes
var playerOneChoices = [];
var playerTwoChoices = [];
// keep a point system to check if a player has won. 3 points = a win
var playerOnePoints = 0;
var playerTwoPoints = 0;

var gridSquares = document.getElementsByClassName('gridSquare');
var questionBox = document.getElementById('question');
var userResponseButton = document.getElementById('user-response-button');
if (!localStorage['games']){
    localStorage.setItem('games', JSON.stringify([]));
}

var saveQuestionsInBank = function() {
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


    new Quiz('TESTHTML');
    new Question('TESTHTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);
};

saveQuestionsInBank();
console.log('Test Question Bank Saved');


// adding event listeners for the boxes when the DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    //get the games in localStorage
    var gamesInLocalStorage = JSON.parse(localStorage['games']);

    if(gamesInLocalStorage.length && gridSquares.length) {
        // this game is always the last game that is saved in local storage
        var thisGame = gamesInLocalStorage[gamesInLocalStorage.length - 1];

        populateGridIconsOnDom(thisGame);
        //addBoxListeners(thisGame);
    }

});

////////////////////// helper functions //////////////////////

var populateGridIconsOnDom = function(thisGame) {
    var numWins = 0;
    var cells = thisGame.grid.cells;
    for(var i = 0; i < cells.length; i++) {
        var gridSquareEL = gridSquares[i];
        if (!cells[i]['winner']) {
            //add event lister for click
            gridSquares[i].addEventListener('click', (event) => clickHandler(event, thisGame));
            gridSquareEL.innerHTML = '<i class="fas fa-question-circle"' + 'id=' + i + '></i>';
        } else {
            numWins++;
            if(cells[i]['winnerIcon'] === 'O') {
                gridSquareEL.innerHTML = '<i class="far fa-circle"' + 'id=' + i + '></i>';
            } else {
                gridSquareEL.innerHTML = '<i class="far fa-times"' + 'id=' + i + '></i>';
            }

            //TODO check to see if logic below this is correct
            gridSquareEL.innerHTML.addAttribute('id', i);

            //remove event Listener
            gridSquares[i].removeEventListener('click', (event) => clickHandler(event, thisGame));

            if(numWins === 9){
                //TODO
                //end Game
                //update player stats
            }
        }
    }
};

var clickHandler = (e, thisGame) => {
    //get index of grid cell clicked
    var cellIndex = e.target.id;
    console.log(`The cell with ID ${e.target.id} has been clicked!`);

    //TODO
    // remove box listeners from all other boxes except cellIndex

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
    //TODO
    // write active Player to Dom


    //get the cell data for the grid cell index of index of cell clicked on front end
    var cellData = thisGame.grid.cells[cellIndex];
    console.log(cellData);

    //check for question
    var question;
    var response;

    if (thisGame.grid.cells[cellIndex].mcQuestions.length) {
        question = thisGame.grid.cells[cellIndex].mcQuestions[thisGame.grid.cells[cellIndex].mcQuestions.length - 1];
        //question = thisGame.grid.cells[cellIndex].mcQuestions.pop();

        // get MC Form
        // show mcQuestion in question area
        showQuestionForm(question.questionQuestion);

        //add event listener to form submit button
        userResponseButton.addEventListener('click', (e) =>handleQuestionResponse(e, cellData));
        // console.log(response);
        // // get data from user input
        // //if active player is correct, cell winner is active player

    } else {
        //tie breaker
        question = thisGame.grid.cells[cellIndex].tfQuestions[thisGame.grid.cells[cellIndex].tfQuestions.length - 1];
        
        
        //question = thisGame.grid.cells[cellIndex].tfQuestions.pop();
        // get TF Question Form
        // show mcQuestion in question area
        showQuestionForm(question.questionQuestion);

        //add event listener to form submit button
        userResponseButton.addEventListener('click', (e) =>handleQuestionResponse(e, cellData));
        console.log(response);

        // get data from user input
        //if active player is correct, cell winner is active player
        //else cell winner is inactive player

    }

    //switch turns

    //replace game info in game local storage and save

    // LOOP UNTIL GAME ENDS
};


var checkWinConditions = () => {
    if (playerOnePoints === 3) {
        console.log('Player 1 Wins!');
        return true;
        // stop game
        // remove listeners
    } else if(playerTwoPoints === 3) {
        console.log('Player 2 Wins!');
        return true;
    } else {
        return false;
    }
};


var keepScore = () => {
    // loop through the win conditions
    for(var i = 0; i < winConditions.length; i++) {
        let innerArr = winConditions[i];
        // loop through the players choices arrays and check against the win condition arrays[i]
        for(var j = 0; j < innerArr.length; j++) {
            if (playerOneChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerOnePoints++;
                // checkWin logic
                checkWinConditions();
            } else if (playerTwoChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerTwoPoints++;
                // checkWin logic
                checkWinConditions();
            }
        }
        // zero out the players points if neither player reached 3 points through the check.
        playerOnePoints = 0;
        playerTwoPoints = 0;
    }
};

// adding boxlistners
var addBoxListeners = (thisGame) => {
    console.log(thisGame);
    for(let i = 0; i < gridSquares.length; i++){
        gridSquares[i].addEventListener('click', (event) => clickHandler(event, thisGame));
    }
};

// removing box listeners
var removeBoxListeners = () => {
    for(let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].removeEventListener('click', (event) => clickHandler(event, thisGame));
    }
};

// function to populate a form for the question when a square is clicked.
var showQuestionForm = function(ques) {
    console.log(ques);
    var pEl = document.createElement('p');
    pEl.textContent = ques.toString();
    questionBox.appendChild(pEl);
    console.log('question form is is displayed');
};

var handleQuestionResponse = (e, cellData) => {
    e.preventDefault();
    var response = parseInt(e.target.previousElementSibling.value);
};



