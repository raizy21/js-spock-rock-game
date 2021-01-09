/******************************
 *links
 *
 * {@link} - https://fontawesome.com/icons?d=gallery&q=close&m=free
 * {@link} - https://fonts.google.com/
 * {@link} - https://www.w3schools.com/js/js_switch.asp
 * {@link} - https://www.youtube.com/watch?v=405Nh2H4Ucg
 * {@link} - https://www.cssscript.com/confetti-falling-animation/
 * {@link} - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * {@link} - https://www.sitepoint.com/understanding-es6-modules-via-their-history/
 * {@link} - https://gist.github.com/branneman/558ef3a37ffd58ea004e00db5b201677
 ******************************/

import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';


const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');

const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
//console.log(allGameIcons);


const choices = {
  rock: { name: 'rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';



//reset all 'selected' icons
function resetSelected() {
  //console.log(allGameIcons);
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

//resetScore and play playerChoice/computerChoice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

//random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();


  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
  //console.log(computerChoice);
}

//add 'selected' styling & computerChoice
function displayComputerChoice() {

  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- spock';
      break;
    default: break;
  }
}

//check result increase score upadte resultText
function updateScore(playerChoice) {
  //console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "it's a tie.";
  } else {
    const choice = choices[playerChoice];

    //console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = "you won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "you lost!"
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}


//call function to process turn
function checkResult(playerChoice) {

  //reset icon before select a value
  resetSelected();

  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//passing player selection value and styling icons
function select(playerChoice) {
  //console.log(playerChoice);

  checkResult(playerChoice);

  //add 'selected' styling and playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- spock';
      break;
    default: break;
  }
}


window.select = select;

//on start up, set initial values
resetAll();

