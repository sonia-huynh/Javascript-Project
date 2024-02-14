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
    randomNumber = Math.floor(Math.random()*10+1)
    guessThisNumber.innerHTML = randomNumber
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
        generateRandomNumber()
        subtitle.innerHTML = ("You guessed it!")
        scoreCount ++
        score.innerHTML = "Score:" + scoreCount 
        
    }else {    
     subtitle.innerHTML = ("Hmm, try again") 
    }
}


function scoring(){

        if (guess.value == randomNumber) {
            scoreCount ++
            score.innerHTML = "Score:" + scoreCount 
        }
}
