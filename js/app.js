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


    new Quiz('TESTHTML');
    new Question('TESTHTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);
};

saveTestQuestionsInBank();
console.log('Test Question Bank Saved');

var saveDefaultQuestionsInBank = function() {
    new Quiz('DEFAULT');

    new Question('DEFAULT', 'MultipleChoice', 'In HTML, what tag is used for indicating superscript?', ['<superscript>', '<super>', '<sup>', '<script>'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);
    new Question('DEFAULT', 'MultipleChoice', 'What symbol would you use in front of a CSS selector to target a class attribute?', ['#', '.', '>', '[class]'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'Which of the following is NOT a data type in JavaScript?', ['number', 'string', 'variable', 'boolean'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'How would you access the 3rd element in the array \'fruits\'? ', ['fruits[3]', 'fruits{2}', 'fruits(3)', 'fruits[2]'], 3);

    new Question('DEFAULT', 'MultipleChoice', 'Which of the following is not a type of list in HTML?', ['numbered', 'ordered', 'unordered', 'definition'], 0);
    new Question('DEFAULT', 'MultipleChoice', 'In JavaScript, which of the following is NOT an arithmetic operator?', ['/', 'x', '+', '-'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In Javascript, what do you call information that is passed to a function as inputs?', ['variables', 'values', 'parameters', 'statements'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'In CSS, which of the following is NOT a position value?', ['relative', 'absolute', 'fixed', 'float'], 3);
    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which tag would you use to create a hyperlink?', ['<a>', '<link>', '<hlink>', '<src>'], 0);

    new Question('DEFAULT', 'MultipleChoice', 'What does HTML stand for?', ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Tools Markup Language'], 2);
    new Question('DEFAULT', 'MultipleChoice', 'What does CSS stand for?', ['Code Style Studio', 'Cascading Style Sheets', 'Cool Stylish Suffering', 'Can\'t Style Sh*t'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which tag is used to add an image to a web page?', ['<image>', '<a>', '<img>', '<pic>']);
    new Question('DEFAULT', 'MultipleChoice', 'From outside in, what is the order of the CSS Box Model?', ['Content, Margin, Border, Padding', 'Margin, Border, Padding, Content', 'Margin, Padding, Border, Content', 'Border, Margin, Padding, Content'], 1);
    new Question('DEFAULT', 'MultipleChoice', 'In CSS, you can select a color by using:', ['RGB value', 'Hex value', 'Name of the color', 'All of the above'], 3);

    new Question('DEFAULT', 'MultipleChoice', 'In HTML, which of the following is not an input type?', ['radio', 'input', 'text', 'submit'], 1);
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



// adding event listeners for the boxes when the DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    //get the games in localStorage
    var gamesInLocalStorage = JSON.parse(localStorage['games']);

    if(gamesInLocalStorage.length && gridSquares.length) {
        // this game is always the last game that is saved in local storage
        var aGame = gamesInLocalStorage[gamesInLocalStorage.length - 1];
        var thisGame = new Game(aGame.quizName, aGame.playerOne, aGame.playerTwo);
        thisGame.grid.initializeGrid(thisGame.questionBank);

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
                stopGame(); // stop game will have the populate results
            }
        }
    }
};

var clickHandler = (e, thisGame) => {
    //get index of grid cell clicked
    var cellIndex = e.target.id;
    console.log(`The cell with ID ${e.target.id} has been clicked!`);


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
    // console.log(cellData);

    //check for question
    var question;
    if (thisGame.grid.cells[cellIndex].mcQuestions.length) {
        question = thisGame.grid.cells[cellIndex].mcQuestions[thisGame.grid.cells[cellIndex].mcQuestions.length - 1];
        //question = thisGame.grid.cells[cellIndex].mcQuestions.pop();
        // // get data from user input
        // //if active player is correct, cell winner is active player

    } else {
        //tie breaker
        question = thisGame.grid.cells[cellIndex].tfQuestions[thisGame.grid.cells[cellIndex].tfQuestions.length - 1];
        //question = thisGame.grid.cells[cellIndex].tfQuestions.pop();
        // get data from user input
        //if active player is correct, cell winner is active player
        //else cell winner is inactive player

    }

    showQuestionForm(question);
    var userResponseButton = document.getElementById('user-response-button');
    console.log(userResponseButton);
    //add event listener to form submit button
    if(userResponseButton){
        userResponseButton.addEventListener('click', (e) => handleQuestionResponse(e, cellData, question, activePlayer, inactivePlayer, thisGame));
    }
    //switch turns

    //replace game info in game local storage and save

    // LOOP UNTIL GAME ENDS
};

// function to populate a form for the question when a square is clicked.
var showQuestionForm = function(question) {
    let questionDiv = document.getElementById('questionBox');
    questionDiv.classList.add('showQuestionBox');
    let questionToAsk = question.questionQuestion;
    let questionResponse = question.questionResponses;
    let questionShowForm = document.getElementById('questionShowForm');
    let elLabel = document.createElement('label');
    let br = document.createElement('br');
    let elSubmit = document.createElement('input');
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
        questionShowForm.appendChild(elRadio);
        questionShowForm.appendChild(radioLabel);
        questionShowForm.appendChild(br);
    }
    elSubmit.setAttribute('type', 'submit');
    elSubmit.setAttribute('id', 'user-response-button');
    elSubmit.textContent = 'Submit Answer';
    questionShowForm.appendChild(elSubmit);
    userResponseButton = document.getElementById('user-response-button');
    console.log(userResponseButton);

    console.log(question.correctAnswer);

};


var gameHasWinner = () => {
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


var hasWinConditions = () => {

    var result;
    // loop through the win conditions
    for(var i = 0; i < winConditions.length; i++) {
        let innerArr = winConditions[i];
        // loop through the players choices arrays and check against the win condition arrays[i]
        for(var j = 0; j < innerArr.length; j++) {
            if (playerOneChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerOnePoints++;
                // checkWin logic
                result = gameHasWinner();
            } else if (playerTwoChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerTwoPoints++;
                // checkWin logic
                result = gameHasWinner();
            }
        }
        // zero out the players points if neither player reached 3 points through the check.
        playerOnePoints = 0;
        playerTwoPoints = 0;
    }

    return result;
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

var handleQuestionResponse = (e, cellData, question, activePlayer, inactivePlayer, thisGame) => {
    e.preventDefault();
    // handle what to do with the response
    console.log('Handling question response');
    
    let questionShowForm = document.getElementById('questionShowForm');
   
    var userResponse;
    
    for (var i = 0;  i < question.questionResponses.length; i++) {
        if(e.target.form[i].checked){
            userResponse = i;
        }
    }

    if(question.correctAnswer === userResponse) {
        cellData.winner = activePlayer;
        cellData.winnerIcon = activePlayer.icon;
        if (thisGame.isPlayerOneTurn) {
            playerOneChoices.push(cellData.id);
        } else {
            playerTwoChoices.push(cellData.id); 
        }
        console.log('there');
    } else {
        
        if(question.questionType === 'TrueFalse') {
            cellData.winner = inactivePlayer;
            cellData.winnerIcon = inactivePlayer.icon;
            if (thisGame.isPlayerOneTurn) {
                playerOneChoices.push(cellData.id);
            } else {
                playerTwoChoices.push(cellData.id); 
            }
        } 
    }
    var gameOver = hasWinConditions();

    if(gameOver) {
        stopGame();
    } else {
        console.log(thisGame.switchTurns);
        thisGame.switchTurns();
        console.log(Object.getPrototypeOf(thisGame) === Game.prototype);
        console.log(thisGame.isPlayerOneTurn);
    }
};

// end the game
var stopGame = (winner) => {
    // save game information in local storage

    // updated player object with a win
    if(winner){ 
        playerObject.win++; // placeholder
    } else if(!winner) {
        playerObject.tie++; // placeholder
        console.log('It\'s a tie');
    }

    // popup for the results message with options that can either take you to a new game or view leaderboards
};
