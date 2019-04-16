'use strict';

const Cell = function(quizName) {
    this.mcQuestions = [];
    this.tieBreakerQuestion = [];
    this.winner;
    this.winnerIcon;
};

const Grid = function(quizName){
    console.log('grid');
    this.quizName = quizName
    this.cells = [];
};

Grid.prototype.setUpGrid = function(){
    //first Grid Instance
    // create 9 cells for this grid
    // for (var i = 0; i < 9; i ++) {
    //     this.cells.push(new Cell());
    // }
  
    // var questionBank = JSON.parse(localStorage['questionBank'])[this.quizName];
    // //var tfQuestions  = questionBank['tfQuestions'];
    // //console.log(tfQuestions);
    // //var randomMultipleChoiceIndices = randomizeArray([0, 1, 2, 3, 4, 5 , 6, 7, 8,9], 9);
    // var randomTrueFalseIndices = this.randomizeArray([0, 1, 2, 3, 4, 5 , 6, 7, 8], 9);
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

Grid.prototype.randomizeArray = function(arr, randomizedArrayLength) {
    var randomizedArr = [];
    var randInt;

    while (randomizedArr.length <= randomizedArrayLength) {
        randInt = Math.floor(Math.random() * arr.length);
        if (!randomizedArr.includes(randInt)) {
            randomizedArr.push(randInt);
        }
    } 

    return randomizedArr;
};


var grid = new Grid();
grid.setUpGrid();


