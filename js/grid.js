'use strict';
const Cell = function(mcQuestions, tfQuestion) {
    this.mcQuestions = [];
    this.tieBreakerQuestion = tfQuestion;
    this.winner;
    this.winnerIcon;
};

const Grid = function(){
    console.log('grid');
    this.cells = [];
};

Grid.prototype.setUpGrid = function(){
  //first Grid Instance
  //get Grid questions
  if(!this.cells.length) {
    console.log('I am empty');
  } else {
    console.log('I am not empty');
    this.populateGrid();
  }
};

Grid.prototype.populateGrid = function(bank){
    console.log('grid has been populated', bank);
};

Grid.prototype.showQuestion = function(index){
    console.log('question has been shown', index);
};

Grid.prototype.getCellSelection = function(){
    console.log('selected cell');
    return 0;
};

Grid.prototype.checkWinConditions = function(){
    console.log('the win conditions');
};

Grid.prototype.updateGrid = function(){
    console.log('grid has been updated');
};

Grid.prototype.randomizeArray = function(arr) {
    //hkl
};


var grid = new Grid();
grid.setUpGrid();

