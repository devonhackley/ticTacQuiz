'use strict';
// Constructior for Game instances
var Game = function(quizName, playerOne, playerTwo) {
    this.gameId = this.calcGameId();
    this.quizName = quizName;
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.questionBank = this.getQuestionBank();
    // Setup grid
    this.isPlayerOneTurn = true;
    this.isOver = false;
    this.grid = new Grid(this.gameId);
    console.log('New game created.'); 
};

//gets the question bank from local storage that is associated with this quiz
Game.prototype.getQuestionBank = function(){
    //since quizName is guaranteed to be in localStorage do not verify
    var quizBank = JSON.parse(localStorage['quizBank']);
    var questions = quizBank[this.quizName];
    return questions;
};

Game.prototype.switchTurns = function(){
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
};

Game.prototype.calcGameId = function() {
    var numGamesInLocStorage = JSON.parse(localStorage['games']).length;
    var newGameId = numGamesInLocStorage;
    return newGameId;
};

