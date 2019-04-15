'use strict';

const Grid = function(){
    console.log('grid');
};

Grid.prototype.setUpGrid = function(){
    console.log('grid is setup');
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
