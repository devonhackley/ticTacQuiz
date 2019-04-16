// Player Constructor
var playerBank = [];

function updateLocalStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function Player(userName) {
    this.userName = userName; // String containing the player's username.
    this.numWins = 0; // Value stores the total # of player's wins.
    this.numLosses = 0; // Value stores the total # of player's losses.
    this.numDraws = 0; // Value stores the total # of player's draws.
    this.totalGames = 0; // Value stores the total # of player's completed games.

    playerBank.push(this); // Adds new player to the playerBank array.
    updateLocalStorage('playerBank', playerBank);
}
new Player('Peter');
new Player('Paolo');
new Player('Tisha');
new Player('Devon');

if(localStorage['playerBank']){
    playerBank = JSON.parse(localStorage['playerBank']);
} else {
    updateLocalStorage('playerBank', playerBank);
}
