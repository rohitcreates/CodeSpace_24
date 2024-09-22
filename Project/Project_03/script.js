const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');


const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        console.log(guess);
        
        
    })
    
}
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a vaild number')
        
    }else if (guess < 1){
        alert('Please enter a vaild number')
    }else if (guess > 100) {
        alert('Pleae enter a number less than 100')
    }else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
if(guess === randomNumber){}
displayMessage('yes gueesd id right');
    
}else if 

function displayGuess(guess) {
    
}

function displayMessage(message) {
    
}

function endGame() {
    
}

function newGame() {
    
}

