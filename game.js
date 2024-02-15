//Test the html and js link:
console.log("Let's play Guess My Number!")

// Declare Variables
let randomNumber 
let guess = document.getElementById("guess")
let submit = document.getElementById("submit")
let button = document.getElementById("button")
let subtitle = document.getElementById("subtitle")
let guessThisNumber = document.getElementById("guessThisNumber")
let guessedNumber = document.getElementById("guessedNumber")
let score = document.getElementById("score")
let highscore = document.getElementById("highscore")
let timer = document.getElementById("timer")
let highscoreCount = 0
let scoreCount = 0
let guessValue

// function to generate random number between 1-50

submit.disabled = true; 
guess.disabled = true;

button.addEventListener("click", ()=> {
    startTimer()
    submit.disabled = false; 
    guess.disabled = false;
    
})



function generateRandomNumber(){
    guessThisNumber.innerHTML = "Guess This Number"
    randomNumber = Math.floor(Math.random()*20+1) 
    console.log(randomNumber)
}

generateRandomNumber()

// console.log(randomNumber)

// function to insert the input value into the guessed number innerHTML

submit.addEventListener("click", showGuess)

function showGuess(event){
    guessValue = guess.value
    event.preventDefault();
    guessedNumber.innerHTML += guessValue + ", "
    checkguess()
    scoring()
    guess.value = ""
}


// check if guessed number matches the randomNumber

function checkguess() {
    if (guessValue == randomNumber) {
        subtitle.innerHTML = "You guessed it!";
        guessedNumber.innerHTML = "Guessed Numbers: ";
        correctGuessTimer();
        score.innerHTML = "Score: " + scoreCount;
        guessThisNumber.innerHTML = randomNumber;
        guessThisNumber.classList.add("correctGuess");

    } else {
         if (guessValue > randomNumber) {
        subtitle.innerHTML = ("oops, too high")

    } else if (guessValue < randomNumber){
        subtitle.innerHTML = ("Hmm too low")
    }
 
}
}
// have a timer so that the box changes colour and shows the correct answer then return back

function correctGuessTimer() {
    setTimeout(function() {
        guessThisNumber.innerHTML = "Guess This Number";
        guessThisNumber.classList.remove("correctGuess");
        generateRandomNumber(); 
    }, 1500);
}



// score if the player gets the number correct
function scoring(){
        if (guess.value == randomNumber) {
            scoreCount ++
            score.innerHTML = "Score:" + scoreCount 

            if (scoreCount > highscoreCount) {
                highscoreCount = scoreCount 
                highscore.innerHTML = "Highscore: " + highscoreCount
            }
        }

}

// set a timer for how many numbers a player can guess before timer runs out
let time = 3
timer.innerHTML = `00:${time}`

function startTimer() {
   time = 3
   let timeInterval = setInterval(() => {
        time--
        timer.innerHTML = `00:${time}`

    if(time <= -1){
        clearInterval(timeInterval)
        endGame()
        alert("Time is up!")
        
    }
    }, 1000);

}


function endGame(){    
    submit.disabled = true; 
    guess.disabled = true;
    
}


