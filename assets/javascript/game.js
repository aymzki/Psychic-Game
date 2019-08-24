//Wins: (# of times the user has guessed the letter correctly)
//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//Guesses Left: (# of guesses left. This will update)
//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

//Create array of letters to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Other variables include wins, losses, guesses remaining
var youWin = 0;
var youLose = 0;
var guessesLeft = 10;
//guessesMade is an array to hold letters
var guessesMade = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    //Determines which key was pressed.
    var userGuess = event.key;
    //Records letter pressed by user
    guessesMade.push(userGuess);
    
    //Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    //If user guess matches computer guess, a point is added to youWin 
    //guesses tally restarts
    if (userGuess === computerGuess) {
        youWin++;
        guessesLeft = 9; 
    }


    else {
        guessesLeft --;
    }

     //If the guesses remaining equals 0, you lose. Losses tally increases by one, and the points restart.
     if (guessesLeft === 0) {
        youLose++;
        guessesLeft = 12;
      }

      
      var winsText = document.getElementById("wins");
      var lossesText = document.getElementById("youLose");
      var guessesLeftText = document.getElementById("guessesLeft");
      var guessesMadeText = document.getElementById("guessesMade");

      winsText.textContent = "Wins: " + youWin;
      lossesText.textContent = "Losses: " + youLose;
      guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
      guessesMadeText.textContent = "Guesses So Far: " + guessesMade;
     
     

      

      
     
};
