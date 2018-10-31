/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

initialize();

//set up event handler

document.querySelector('.btn-roll').addEventListener('click', function() {
        if(gamePlaying){
            //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score only IF the number was NOT a 1
        if (dice > 1) {
            //add to score
            roundScore += dice;
            //display new summed up score
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            //Next players turn
            nextPlayer();
        }
    }
});


//Set up 'hold points' button
document.querySelector('.btn-hold').addEventListener('click', function() {
        if(gamePlaying){
            //1. add current score to global score
        scores[activePlayer] += roundScore;
        
        //2. Update the global display
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3. Check if player one the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else{
            //4. Switch to next player
            nextPlayer();
        }  
    }  
});


function nextPlayer() {
    //Next players turn
    
    //swithces active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //resets round score
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //changes background and adds dot to current player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //removes picture of die for fresh start
    document.querySelector('.dice').style.display = 'none';
}


//set up new game button
document.querySelector('.btn-new').addEventListener('click', initialize);

function initialize() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

















