// Player Constructor
var playerBank = [];

function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function Player(userName, icon) {
    this.userName = userName; // String containing the player's username.
    this.numWins = 0; // Value stores the total # of player's wins.
    this.numLosses = 0; // Value stores the total # of player's losses.
    this.numDraws = 0; // Value stores the total # of player's draws.
    this.totalGames = 0; // Value stores the total # of player's completed games.
    this.icon = icon;

    playerBank.push(this); // Adds new player to the playerBank array.
    updateLocalStorage('playerBank', playerBank);
}

if(localStorage['playerBank']){
    playerBank = JSON.parse(localStorage['playerBank']);
} else {
    var peter = new Player('Peter');
    peter.numWins = 5; // for leaderboard
    peter.icon = '';
    var paolo = new Player('Paolo');
    paolo.numWins = 3; // for leaderboard
    paolo.icon = '';
    var tisha = new Player('Tisha');
    tisha.numWins = 10; // for leaderboard
    tisha.icon = '';
    var devon = new Player('Devon');
    devon.numWins = 2; // for leaderboard
    devon.icon = '';
    updateLocalStorage('playerBank', playerBank);
}
