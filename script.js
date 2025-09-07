let myMove;
let result = '';
let win = 0;
let lose = 0;
let tie = 0;
let randomMove = '';
let display = document.querySelector('.message');

function computerMove() {
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= 1 / 3) {
        randomMove = 'Rock';
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        randomMove = 'Paper';
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        randomMove = 'Scissor';
    }
    return randomMove
}

//winning condition 
function checkWinner(myMove, randomMove) {
    myMoveImageAdder(myMove);
    computerMoveImageAdder(randomMove);
    if (myMove === 'Rock') {

        if (randomMove === 'Scissor') {
            result = 'you Win!';

        } else if (randomMove === 'Paper') {
            result = 'You Lost!';


        } else if (randomMove === 'Rock') {
            result = 'Tie';
        }
    }
    else if (myMove === 'Paper') {

        if (randomMove === 'Scissor') {
            result = 'You Lost!';

        } else if (randomMove === 'Paper') {
            result = 'Tie'

        } else if (randomMove === 'Rock') {
            result = 'you Win!';

        }
    }
    else if (myMove === 'Scissor') {

        if (randomMove === 'Scissor') {
            result = 'Tie';

        } else if (randomMove === 'Paper') {
            result = 'you Win!';

        } else if (randomMove === 'Rock') {
            result = 'You Lost!';

        }
    }

    if (result === 'You Lost!') {
        lose++;
    } else if (result === 'you Win!') {
        win++;
    } else if (result === 'Tie') {
        tie++;
    }

    return result;
}

function printResult() {
    // alert(`You picked ${myMove}.\nComputer Picked ${randomMove}.\n${result}`);
    display.innerText = `Wins: ${win}  \tLose: ${lose}  \tTie: ${tie}`;
    document.querySelector('.result-message').innerHTML = `${result}`;


}
function reset() {
    win = 0;
    lose = 0;
    tie = 0;
    display.innerText = `Wins: ${win}  \tLose: ${lose}  \tTie: ${tie}`;
}

function myMoveImageAdder(myMove) {
    let ele = document.querySelector('.js-player-move-tracker');
    if (myMove === 'Rock') {
        ele.innerHTML = '<img src="images/Rockf.png" alt="" class="player-move">'
    } else if (myMove === 'Paper') {
        ele.innerHTML = '<img src="images/paper.png" alt="" class="player-move">'
    } else if (myMove === 'Scissor') {
        ele.innerHTML = '<img src="images/scissor.png" alt="" class="player-move">'
    }
}
function computerMoveImageAdder(computerMove) {
    let ele = document.querySelector('.js-computer-move-tracker');
    if (computerMove === 'Rock') {
        ele.innerHTML = '<img src="images/Rockf.png" alt="" class="computer-move">'
    } else if (computerMove === 'Paper') {
        ele.innerHTML = '<img src="images/paper.png" alt="" class="computer-move">'
    } else if (computerMove === 'Scissor') {
        ele.innerHTML = '<img src="images/scissor.png" alt="" class="computer-move">'
    }
}