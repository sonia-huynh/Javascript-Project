//Test the html and js link:
console.log("Let's play Guess My Number!")

// Declare Variables
let randomNumber 
let guess = document.getElementById("guess")
let submit = document.getElementById("submit")
let subtitle = document.getElementById("subtitle")
let guessThisNumber = document.getElementById("guessThisNumber")
let guessedNumber = document.getElementById("guessedNumber")
let score = document.getElementById("score")
let scoreCount = 0
let guessValue

// function to generate random number between 1-50

function generateRandomNumber(){
    guessThisNumber.innerHTML = "Guess This Number"
    randomNumber = Math.floor(Math.random()*10+1) 
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
    if(guess.value == randomNumber) {
        subtitle.innerHTML = ("You guessed it!")
        guessedNumber.innerHTML = "Guessed Numbers: "
        scoreCount ++
        score.innerHTML = "Score: " + scoreCount 
        guessThisNumber.innerHTML = randomNumber
        guessThisNumber.classList.add("correctGuess");

// have a timer so that the box changes colour and shows the correct answer then return back

        setTimeout(function() {
            guessThisNumber.innerHTML = "Guess This Number";
            guessThisNumber.classList.remove("correctGuess");
            generateRandomNumber(); 
        }, 1500);
        
// if guesses are wrong      

    }else {    
     subtitle.innerHTML = ("Hmm, try again") 
    }
}


// score if the player gets the number correct
function scoring(){
        if (guess.value == randomNumber) {
            scoreCount ++
            score.innerHTML = "Score:" + scoreCount 
        }
}

// set a timer for how many numbers a player can guess before timer runs out
