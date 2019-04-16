'use strict';

// Constructior for Game instances
const Game = function(quiz, playerOne, playerTwo) {
    this.quiz = quiz;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.questionBank = this.createQuestionBank();
    // Setup grid
    this.grid = new Grid();
    this.grid.setUpGrid(quiz);
    this.isPlayerOneTurn = true;
};

Game.prototype.createQuestionBank = function(){
    if(localStorage['quiz']) {
        return JSON.parse(localStorage['quiz']);
    } else {
        console.log('No local storage');
        return;
    }
};

Game.prototype.playGame = function(){
    // figure out whose turn it is(active player)
    let activePlayer = '';
    if(this.isPlayerOneTurn) {
        activePlayer = this.playerOne;
    } else {
        activePlayer = this.playerTwo;
    }

    // populate grid and populate grid cell with questions  : call from grid.js
    this.grid.populateGrid(this.questionBank);
    // Get user cell selection
    var userCell = this.grid.getCellSelection();
    // Show question in cell: grid.js
    this.grid.showQuestion(userCell);
    // handle user selection from question (check to see right or wrong)
    this.handleUserSelection();
    // check win conditions
    this.grid.checkWinConditions();
    // update grid
    this.grid.updateGrid();
    // switch turns
    this.switchTurns();
};

Game.prototype.switchTurns = function(){
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
};

Game.prototype.handleUserSelection = function(){

};

