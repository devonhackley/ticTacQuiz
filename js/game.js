'use strict';

// Constructior for Game instances
const Game = function(quizName, playerOne, playerTwo) {
    this.quizName = quizName;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.questionBank = this.getQuestionBank();
    // Setup grid
    this.isPlayerOneTurn = true;
    this.grid = new Grid(this);
};

//gets the question bank from local storage that is associated with this quiz
Game.prototype.getQuestionBank = function(){
    //since quizName is guaranteed to be in localStorage do not verify
    var quizBank = JSON.parse(localStorage['quizBank']);
    var questions = quizBank[this.quizName];
    return questions;
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
