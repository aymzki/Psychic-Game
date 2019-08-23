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
var guessesLeft = 5;
//guessesMade is an array to hold letters
var guessesMade = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    
};