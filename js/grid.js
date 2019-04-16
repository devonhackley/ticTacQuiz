'use strict';
var winConditions = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]];
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

const Grid = function(quizName){
    console.log('grid');
    this.quizName = quizName;
    this.cells = [];
};

Grid.prototype.initializeGrid = function(){
    //create 9 cells for this grid
    for (var i = 0; i < 9; i ++) {
        this.cells.push(new Cell());
    }

    var tfQuestions = this.game.questionBank['tfQuestions'];
    var mcQuestions = this.game.questionBank['mcQuestions'];

    var tfQuestionsIndicesArray = this.makeArrayofIndices(tfQuestions.length);
    var mcQuestionsIndicesArray = this.makeArrayofIndices(mcQuestions.length);

    //create arrays of randomized indices for true/false and mutltiple choice questions
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

Grid.prototype.getCellSelection = function(e){
    console.log(e.target.id);
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
                this.checkWinConditions();
                // checkTie logic
                this.checkTie();
            } else if (playerTwoChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerTwoPoints++;
                // checkWin logic
                this.checkWinConditions();
                // checkTie logic
                this.checkTie();
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
grid.initializeGrid();



