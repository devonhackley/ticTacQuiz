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
    
    // this game is always the last game that is saved in local storage
    var thisGame = gamesInLocalStorage[gamesInLocalStorage.length - 1];
    
    populateGridIconsOnDom(thisGame.grid.cells);
    addBoxListeners(thisGame);

});

////////////////////// helper functions //////////////////////

var populateGridIconsOnDom = function(cells) {

    for(var i = 0; i < cells.length; i++) {
        var gridSquareEL = gridSquares[i];
        if (!cells[i]['winner']) {
            gridSquareEL.innerHTML = '<i class="fas fa-question-circle"></i>';
        } else {
            gridSquareEL.innerHTML = cells[i]['winnerIcon'];
        }
    }
};

var clickHandler = (e) => {
    var cellIndex = e.target.id;
    console.log(`The cell with ID ${e.target.id} has been clicked!`);
    
    
    
    // get the cell data for the grid cell index of index of cell clicked on front end
    //var cellData = thisGame.grid.cells[cellIndex];
    //console.log(cellData);

    //replace game info in game local storage and save
};

// adding boxlistners
var addBoxListeners = () => {
    for(let i = 0; i < gridSquares.length; i++){
        gridSquares[i].addEventListener('click', clickHandler);
    }
};

// removing box listeners
var removeBoxListeners = () => {
    for(let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].removeEventListener();
    }
};


