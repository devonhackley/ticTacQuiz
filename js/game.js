'use strict';

// Constructior for Game instances
const Game = function(quiz, playerOne, playerTwo) {
    this.quiz = quiz;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.questionBank = {};
    // Setup grid
    this.grid = new Grid();
    this.grid.setUpGrid();
    this.isPlayerOneTurn = true;
};

Game.prototype.createQuestionBank = function(){
    if(localStorage['quiz']) {
        this.questionBank = JSON.parse(localStorage['quiz']);
    } else {
        console.log('No local storage');
    }
};

Game.prototype.playGame = function(){
    // figure out whose turn it is(active player)
    // populate grid and populate grid cell with questions  : call from grid.js
    // Get user cell selection
    // Show question in cell: question.js
    // handle user selection from question (check to see right or wrong)
    // check win conditions
    // update grid
    // switch turns
};

Game.prototype.switchTurns = function(){
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
};


