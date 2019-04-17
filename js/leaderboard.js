'use strict';
var rankedPlayers = [];
if(localStorage['playerBank']){
    rankedPlayers = JSON.parse(localStorage['playerBank']);
}


function sortRankPlayers(){
    var leaderBoard = document.getElementById('leaderboard-container');
    var ol = document.createElement('ol');
    leaderBoard.appendChild(ol);
    rankedPlayers.sort((a,b) => {
        return b.numWins - a.numWins;
    });
    rankedPlayers.forEach((player)=> {
        let name = document.createElement('span');
        let wins = document.createElement('span');
        let losses = document.createElement('span');
        name.textContent = player.userName;
        wins.textContent = player.numWins;
        losses.textContent = player.numLosses;

        let winsRow = document.createElement('li');
        winsRow.appendChild(name);
        winsRow.appendChild(wins);
        winsRow.appendChild(losses);
        ol.appendChild(winsRow);
    });
}
sortRankPlayers();
