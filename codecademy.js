/*

The idea for this project started with this mini project in the Codecademy JS course. 
This was the code for this as we were practicing functions. 
I had a difficult time at first using all of this for an app with an actual UI so I created my own js file
to get this to work and display properly with actual user clicks with event listeners rather than just feeding
the user selection to the program like this one does. 
This is first time that I have actually created something not directly from a course. Interesting to come back 
to this after I progress a lot.

*/


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock') {
      return userInput;
    } else if (userInput === 'paper') {
      return userInput;
    } else if (userInput === 'scissors') {
      return userInput;
    } else if (userInput === 'bomb') {
      return userInput;
    } else {
      return 'Error, please input valid choice!';
    }
  }
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
  
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else if (randomNumber === 2){ 
      return 'scissors';
    }
  }
  // console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    }
  
    if (userChoice === 'bomb'){
      return 'BOMB! User wins!!'
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'Computer Wins.. :(';
      } else /*if (computerChoice === 'scissors')*/ {
        return 'You Win!! :)'
      }
    }
  
      if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'Computer Wins.. :(';
      } else /*if (computerChoice === 'rock')*/ {
        return 'You Win!! :)'
      }
    }
  
      if (userChoice === 'scissors') {
      if (computerChoice === 'rock'){
        return 'Computer Wins.. :(';
      } else /*if (computerChoice === 'paper')*/ {
        return 'You Win!! :)'
      }
    }
  }
  
  // console.log(determineWinner('scissors', 'rock'));
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
      console.log(`User Choice: ${userChoice}`);
    const computerChoice = getComputerChoice();
      console.log(`Computer Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();