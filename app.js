let compChoice = document.getElementById('computerChoiceDisplay');
let result = document.getElementById('resultDisplay');
let tableDisplay = document.getElementById('table');
// let preGameDisplay = document.getElementsByClassName('preGame');
let userChoice = document.getElementById('userSelection');
let userPregameText = document.getElementById('pregame-user-text');
let compPregameText = document.getElementById('pregame-comp-text');
let userTally = 0;
let compTally = 0;
let userScore = document.getElementById('user-value');
let compScore = document.getElementById('comp-value');
let resultContainer = document.getElementById('resultContainer');
let resultDisplay = document.getElementById('resultDisplay');
let competitonDisplay = document.getElementById('competiton');
let bottomButton = document.getElementById('bottomButton');
let playAgainQuestion = document.getElementById('play-again-question');


// Function for random number to then be refreshed after 

const getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(randomNumber);
    return randomNumber;
};


// // //   Randomly Selecting Computer's Choice of R,P,S
const getComputerChoice = () => {

    let randomNumber = getRandomNumber();

    // Taking random computer selection and printing on HTML for Computer Selection
    if (randomNumber === 0) {
        // compChoice.textContent = "ROCK";
        // trying to display img instead of text
        let img = document.createElement("img");
        img.src = "Rock-paper-scissors_(rock).png";
        let src = document.getElementById("computerChoiceDisplay");
        src.appendChild(img);

        // adding id so can target when deleting for 'play again'
        img.setAttribute('id', 'compChoice');

        // now instead going to use this to potentially make the result display work
        img.classList.add("rock-selected");

    } else if (randomNumber === 1) {
        // compChoice.textContent = "PAPER";
        let img = document.createElement("img");
        img.src = "Rock-paper-scissors_(paper).png";
        let src = document.getElementById("computerChoiceDisplay");
        src.appendChild(img);

        // adding id so can target when deleting for 'play again'
        img.setAttribute('id', 'compChoice');

        // now instead going to use this to potentially make the result display work
        img.classList.add("paper-selected");

    } else if (randomNumber === 2) {
        // compChoice.textContent = "SCISSORS";
        let img = document.createElement("img");
        img.src = "Rock-paper-scissors_(scissors).png";
        let src = document.getElementById("computerChoiceDisplay");
        src.appendChild(img);


        // adding id so can target when deleting for 'play again'
        img.setAttribute('id', 'compChoice');

        // now instead going to use this to potentially make the result display work
        img.classList.add("scissors-selected");
    }
};


// User Clicking "R/P/S" and just having it say "R/P/S" and erase the other two options

// Click Events for Selecting R/P/S
const rockBtn = document.getElementById('rockBtn').addEventListener('click', rockClick);
const paperBtn = document.getElementById('paperBtn').addEventListener('click', paperClick);
const scissorsBtn = document.getElementById('scissorsBtn').addEventListener('click', scissorsClick);

// Function for ROCK Click
function rockClick() {
    tableDisplay.style.display = "none";
    userPregameText.style.display = "none";
    compPregameText.style.display = "none";

    // preGameDisplay.style.display = "none";
    // userChoice.textContent = "ROCK";

    // Instead of displaying text, I want to display the picture (and maybe also include the text as well)
    let img = document.createElement("img");
    img.src = "Rock-paper-scissors_(rock).png";
    let src = document.getElementById("userSelection");
    src.appendChild(img);

    // will need to add a class to this img as well so that it knows to only delete this and not the other images in the original table
    // now instead going to use this to potentially make the result display work
    img.classList.add("user-selected");

    // doing same as above but adding an id instead
    img.setAttribute('id', 'test');

    // after this click the computer needs to select simultaneously
    // let tbd = document.querySelectorAll('.preGame');
    // tbd.style.display = 'none';
    getComputerChoice();

    rockResult();


    // logic of result of who wins / a tie
    // Will need to run a function that determines outcome
    // This is only for a user selecting rock 
    // So will need to compare user selection rock vs. all computer choices and determine outcome and print result
    // if (randomNumber === 0) { // 0 is ROCK //
    //     result.textContent = "TIE THIS ROUND";
    // } else if (randomNumber === 1) { // 1 is PAPER //
    //     result.textContent = "COMPUTER WINS THIS ROUND :(";
    // } else if (randomNumber === 2) { // 2 is SCISSORS // 
    //     result.textContent = "YOU WIN THIS ROUND :)";
    //     addUserTally();
    // }
};

function rockResult() {
    if (document.querySelector('.user-selected') && document.querySelector('.rock-selected')) {
        console.log('Tie');
    } else if (document.querySelector('.paper-selected')) {
        console.log('Comp wins!');
        addCompTally();
    } else {
        console.log('User wins!');
        addUserTally();
    }
};

// Function for PAPER Click
function paperClick() {
    tableDisplay.style.display = "none";
    userPregameText.style.display = "none";
    compPregameText.style.display = "none";
    // preGameDisplay.style.display = "none";
    // userChoice.textContent = "PAPER";

    let img = document.createElement("img");
    img.src = "Rock-paper-scissors_(paper).png";
    let src = document.getElementById("userSelection");
    src.appendChild(img);

    // will need to add a class to this img as well so that it knows to only delete this and not the other images in the original table
    // img.classList.add("test");
    // now instead going to use this to potentially make the result display work
    img.classList.add("user-selected");

    // doing same as above but adding an id instead
    img.setAttribute('id', 'test');

    // after this click the computer needs to select simultaneously
    getComputerChoice();

    // logic of result of who wins / a tie
    // if (randomNumber === 0) { // 0 is ROCK //
    //     result.textContent = "YOU WIN THIS ROUND :)";
    // } else if (randomNumber === 1) { // 1 is PAPER //
    //     result.textContent = "TIE THIS ROUND";
    // } else if (randomNumber === 2) { // 2 is SCISSORS // 
    //     result.textContent = "COMPUTER WINS THIS ROUND :(";
    // }

    paperResult();

};

function paperResult() {
    if (document.querySelector('.user-selected') && document.querySelector('.rock-selected')) {
        console.log('User wins!');
        addUserTally();
    } else if (document.querySelector('.paper-selected')) {
        console.log('Tie!');
    } else {
        console.log('Comp wins!');
        addCompTally();
    }
};

// Function for SCISSORS Click
function scissorsClick() {
    tableDisplay.style.display = "none";
    userPregameText.style.display = "none";
    compPregameText.style.display = "none";
    // preGameDisplay.style.display = "none";
    // userChoice.textContent = "SCISSORS";

    let img = document.createElement("img");
    img.src = "Rock-paper-scissors_(scissors).png";
    let src = document.getElementById("userSelection");
    src.appendChild(img);

    // will need to add a class to this img as well so that it knows to only delete this and not the other images in the original table
    // img.classList.add("test");
    // now instead going to use this to potentially make the result display work
    img.classList.add("user-selected");

    // doing same as above but adding an id instead
    img.setAttribute('id', 'test');

    // after this click the computer needs to select simultaneously
    let random = getComputerChoice();

    // logic of result of who wins / a tie
    // if (random === 0) { // 0 is ROCK //
    //     result.textContent = "COMPUTER WINS THIS ROUND :(";
    // } else if (random === 1) { // 1 is PAPER //
    //     result.textContent = "YOU WIN THIS ROUND :)";
    // } else if (random === 2) { // 2 is SCISSORS // 
    //     result.textContent = "TIE THIS ROUND";
    // }

    scissorsResult();
};

function scissorsResult() {
    if (document.querySelector('.user-selected') && document.querySelector('.rock-selected')) {
        console.log('Comp wins!');
        addCompTally();
    } else if (document.querySelector('.paper-selected')) {
        console.log('User wins!');
        addUserTally();
    } else {
        console.log('Tie!');
    }
};

// Next Round - refreshing the round 
const playAgain = bottomButton.addEventListener('click', advanceRound);
// New Game - reloading the page to restart the game / play another game
const newGame = document.getElementById('newGame').addEventListener('click', reloadPage);

    
function reloadPage() {
        let reloading = location.reload();
};

    
// Function for if user wins - to add to tally 
function addUserTally() {
        
        userTally++;
        console.log(`Number of User Wins: ${userTally}`);

        // instead of console.log I want to display to Score for User Choice
        
        userScore.textContent = userTally;


        if (userTally > 2) {
            console.log("GAME OVER: User wins!")
            // Will need to restructure HTML to display user winning and no opportunity to play again (in the current game - will have to have a new game button later)
            competitonDisplay.style.display = 'none';
            bottomButton.style.display = 'none';
            playAgainQuestion.style.display = 'block';
            resultContainer.style.display = 'flex';
            resultDisplay.textContent = 'USER WINS!!';
        }
};


// Function for if user wins - to add to tally 
function addCompTally() {
        
            compTally++;
            console.log(`Number of Comp Wins: ${compTally}`);
    
            // instead of console.log I want to display to Score for User Choice
            
            compScore.textContent = compTally;
    
    
            if (compTally > 2) {
                console.log("GAME OVER: Comp wins!")
                // Will need to restructure HTML to display user winning and no opportunity to play again (in the current game - will have to have a new game button later)
                competitonDisplay.style.display = 'none';
                bottomButton.style.display = 'none';
                playAgainQuestion.style.display = 'block';
                resultContainer.style.display = 'flex';
                resultDisplay.textContent = 'COMPUTER WINS :(';
            }
};



// Can just create a new function for advancing the round - will include the add tally (manually will reset with DOM)
function advanceRound() {
        // Tally score and display (prob separate function to call here)

        // Reset all HTML back to original

        /* ORIGINAL APPROACH
            // Reset 'Your Choice'
            // userChoice.remove("img");
            tableDisplay.style.display = "block";
            // Want to remove the img with the class name but not the img in the table
            userChoice.getElementsByClassName(".test").style.display = "none";
            // userChoice.getElementsByClassName(".test").remove("img");

            // Reset 'Computer Choice'
            compChoice.remove("img");

            // Reset 'Results'
            result.textContent = "";
            */

        // NEW APPROACH

        // Clear Result
        result.textContent = '';

        // Clear Your Choice Display
        let test = document.getElementById('test');
        test.remove();
        // Display Original Table
        tableDisplay.style.display = "block";
        userPregameText.style.display = "block";
        compPregameText.style.display = "block";

        // Clear Computer Display
        let testTwo = document.getElementById('compChoice');
        testTwo.remove();

        // Call Function Add Round Score To Tally
        // addUserTally();

};