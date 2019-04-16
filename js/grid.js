'use strict';
var winConditions = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
// track the choices each player makes
var playerOneChoices = [];
var playerTwoChoices = [];
// keep a point system to check if a player has won. 3 points = a win
var playerOnePoints = 0;
var playerTwoPoints = 0;

const Cell = function(quizName){
    this.mcQuestions = [];
    this.tieBreakerQuestion = [];
    this.winner;
    this.winnerIcon;
};

const Grid = function(game){
    this.game = game;
    this.quizName = game['quizName'];
    this.cells = [];
    this.initializeGrid();
};

// sets up grid will cells and cell info
Grid.prototype.initializeGrid = function(){
    //create 9 cells for this grid
    for (var i = 0; i < 9; i ++) {
        this.cells.push(new Cell());
    }

    var tfQuestions = this.game.questionBank['tfQuestions'];
    var mcQuestions = this.game.questionBank['mcQuestions'];

    var tfQuestionsIndicesArray = this.makeArrayofIndices(tfQuestions.length);
    var mcQuestionsIndicesArray = this.makeArrayofIndices(mcQuestions.length);

    var randomMultipleChoiceIndices = this.randomizeArray(mcQuestionsIndicesArray, 18);
    var randomTrueFalseIndices = this.randomizeArray(tfQuestionsIndicesArray, 9);

    //add tie breaker question to each cell, and 2 mc questions to each cell
    var mcIndexTracker = 0;
    for (var i = 0; i < 9; i++) {
        this.cells[i]['tieBreakerQuestion'] = tfQuestions[randomTrueFalseIndices[i]];
        this.cells[i]['mcQuestions'][0] = mcQuestions[randomMultipleChoiceIndices[mcIndexTracker]];
        this.cells[i]['mcQuestions'][1] = mcQuestions[randomMultipleChoiceIndices[mcIndexTracker + 1 ]];
        mcIndexTracker += 2; 
    }

    console.log('Initialized Grid');
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
    if (playerOnePoints === 3) {
        console.log('Player 1 Wins!');
    } else if(playerTwoPoints === 3) {
        console.log('Player 2 Wins!');
    }
};

Grid.prototype.checkTie = function(){
    if(playerOneChoices.length + playerTwoChoices.length === 9){
        console.log('It\'s a tie');
    }
};

Grid.prototype.keepScore = function(){
    // loop through the win conditions
    for(var i = 0; i < winConditions.length; i++) {
        let innerArr = winConditions[i];
        // loop through the players choices arrays and check against the win condition arrays[i]
        for(var j = 0; j < innerArr.length; j++) {
            if (playerOneChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerOnePoints++;
                // checkWin logic
                Grid.checkWinConditions();
                // checkTie logic
                Grid.checkTie();
            } else if (playerTwoChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerTwoPoints++;
                // checkWin logic
                Grid.checkWinConditions();
                // checkTie logic
                Grid.checkTie();
            }
        }
        // zero out the players points if neither player reached 3 points through the check.
        playerOnePoints = 0;
        playerTwoPoints = 0;
    }
};

Grid.prototype.updateGrid = function(){
    console.log('grid has been updated');
};

// accepts an array and returns a new shuffled array of size randomizedArrayLength
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

//makes a array of indices 0 to arrayLength - 1
Grid.prototype.makeArrayofIndices = function(arrayLength) {
    var result = [];
    for(var i = 0; i < arrayLength; i++) {
        result.push(i);
    }
    return result;
};


//var grid = new Grid();
//grid.initializeGrid();



