'use strict';
var rankedPlayers = [];
if(localStorage['playerBank']){
    rankedPlayers = JSON.parse(localStorage['playerBank']);
}


function rankPlayers(){
    var leaderBoardTable = document.getElementById('table-area');
    var tBody = document.createElement('tbody');
    leaderBoardTable.appendChild(tBody);
    let headerRow = document.createElement('tr');
    let rank = document.createElement('th');
    let player = document.createElement('th');
    let wins = document.createElement('th');
    rank.textContent = 'Rank';
    player.textContent = 'Username';
    wins.textContent = '# of Wins';
    headerRow.appendChild(rank);
    headerRow.appendChild(player);
    headerRow.appendChild(wins);
    tBody.appendChild(headerRow);
    rankedPlayers.sort((a,b) => {
        return b.numWins - a.numWins;
    });
    rankedPlayers.forEach((player, index)=> {
        let ranking = document.createElement('td');
        let name = document.createElement('td');
        let wins = document.createElement('td');
        let currentIndx = index + 1;
        if (currentIndx === 1){
            ranking.innerHTML = '<i class="fas fa-medal one"></i>' + currentIndx;
        } else if (currentIndx === 2) {
            ranking.innerHTML = '<i class="fas fa-medal two"></i>' + currentIndx;
        } else if (currentIndx === 3) {
            ranking.innerHTML = '<i class="fas fa-medal three"></i>' + currentIndx;
        } else {
            ranking.innerHTML = currentIndx;
        }
        name.textContent = player.userName;
        wins.textContent = player.numWins;

        let row = document.createElement('tr');
        row.appendChild(ranking);
        row.appendChild(name);
        row.appendChild(wins);
        tBody.appendChild(row);
    });
}
rankPlayers();
