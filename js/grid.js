'use strict';
var winConditions = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
// track the choices each player makes
var playerOneChoices = [];
var playerTwoChoices = [];
// keep a point system to check if a player has won. 3 points = a win
var playerOnePoints = 0;
var playerTwoPoints = 0;

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
                // TODO: checkWin logic
                // TODO: checkTie logic
            } else if (playerTwoChoices.includes(innerArr[j])) {
                // add a point for each matching id in any of the win condition. 3 matching id's in a given array will award three points.
                playerTwoPoints++;
                // TODO: checkWin logic
                // TODO: checkTie logic
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
