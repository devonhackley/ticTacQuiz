/* eslint-disable no-undef */
'use strict';
// global variables
var gridSquares = document.getElementsByClassName('gridSquare');
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
            gridSquareEL.innerHTML = cells[i]['winnerIcon'];

            //TODO check to see if logic below this is correct
            gridSquareEL.innerHTML.addAttribute('id', i);

            //remove event Listener
            gridSquares[i].removeEventListener('click', (event) => clickHandler(event, thisGame));

            if(numWins === 9){
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

    if (thisGame.grid.cells[cellIndex].mcQuestions.length) {
        question = thisGame.grid.cells[cellIndex].mcQuestions.pop();
        // get MC Form
        // show mcQuestion in question area
        // get data from user input
        //if active player is correct, cell winner is active player
            
    } else {
        //tie breaker
        question = thisGame.grid.cells[cellIndex].tfQuestions.pop();
        // get TF Question Form
        // show TF Question in TF Question form in Question area
        // get data from user input
        //if active player is correct, cell winner is active player
            //else cell winner is inactive player
        
    }
    
    //switch turns

    //replace game info in game local storage and save

    // LOOP UNTIL GAME ENDS
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



