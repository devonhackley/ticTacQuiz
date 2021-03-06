'use strict';


const Cell = function(){
    this.id;
    this.mcQuestions = [];
    this.tieBreakerQuestion = [];
    this.winner;
    this.winnerIcon;
    console.log('Cell created.');
};

const Grid = function(gameId){
    //console.log(gameId);
    this.gameId = gameId;
    this.cells = [];
};

// sets up grid will cells and cell info
Grid.prototype.initializeGrid = function(questionBank){
    //create 9 cells for this grid
    for (var i = 0; i < 9; i ++) {
        this.cells.push(new Cell());
    }

    var tfQuestions = questionBank['tfQuestions'];
    var mcQuestions = questionBank['mcQuestions'];

    var tfQuestionsIndicesArray = this.makeArrayofIndices(tfQuestions.length);
    var mcQuestionsIndicesArray = this.makeArrayofIndices(mcQuestions.length);

    //create arrays of randomized indices for true/false and mutltiple choice questions
    var randomMultipleChoiceIndices = this.randomizeArray(mcQuestionsIndicesArray, 18);
    var randomTrueFalseIndices = this.randomizeArray(tfQuestionsIndicesArray, 9);

    //add tie breaker question to each cell, and 2 mc questions to each cell
    var mcIndexTracker = 0;
    /* eslint-disable no-redeclare*/
    for (var i = 0; i < 9; i++) {
        this.cells[i]['id'] = i;
        this.cells[i]['tieBreakerQuestion'][0] = tfQuestions[randomTrueFalseIndices[i]];
        this.cells[i]['mcQuestions'][0] = mcQuestions[randomMultipleChoiceIndices[mcIndexTracker]];
        this.cells[i]['mcQuestions'][1] = mcQuestions[randomMultipleChoiceIndices[mcIndexTracker + 1 ]];
        mcIndexTracker += 2;
    }
    console.log('Initialized Grid');
};

// accepts an array and returns a new shuffled array of size randomizedArrayLength
Grid.prototype.randomizeArray = function(arr, randomizedArrayLength) {
    var randomizedArr = [];
    var randInt;
    var counter = 0;
    while (counter < randomizedArrayLength) {
        randInt = Math.floor(Math.random() * arr.length);
        if (!randomizedArr.includes(randInt)) {
            randomizedArr.push(randInt);
            counter++;
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



