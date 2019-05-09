var Word = require("./Word");
var inquirer = require("inquirer");
var clc = require("cli-color");

// bring the colors:
var wrong = clc.red;
var right = clc.green;

var wordArray = [
    "Muad'dib",
    "Atreidies",
    "Harkonnen",
    "Mentat",
    "Stilgar",
    "Chani",
    "Feyd Rautha",
    "Sardukar",
    "Spice Melange",
    "Emperor Shaddam IV",
    "Shadout Mapes",
    "Sandworm",
    "Gom Jabbar"
];
// var count = 0;
var guesses = [];   // no duplicate guesses.
var puzzleIndex = 0;

console.clear();
console.log("ARE WE DUNE YET?");
initGame();

//  Initializes the game.  Called in main body and by resetGame().  Calls playGame().  No return
function initGame() {
    // console.log(wordArray);
    puzzleIndex = Math.floor(Math.random() * wordArray.length); //  get a random index
    var puzzle = new Word(wordArray[puzzleIndex]);  //  build the Word object with the string at our random index
    console.log(puzzle.Show());     //  show the current puzzle.
    // count = puzzle.word.length + 5;
    playGame(puzzle);
}

//  Resets the game.  Called when a puzzle is solved.  Calls initGame().  No return
function resetGame() {
    guesses = [];
    wordArray.splice(puzzleIndex, 1);   //  remove the current puzzle from the array
    if (wordArray.length) {
        console.log("You solved it!  Next puzzle:");    //  if there are more puzzles in the array, start again
        initGame();
    }
    else {
        console.log("All puzzles solved!");     //  you solved everything, smarty-pants
    }
}

//  Main gameplay function.  Called recursively.  Calls resetGame().  No return
function playGame(puzzle) {
    if (puzzle.solved) {    //  you solved this one, congrats
        resetGame();    
        return;
    }
    else if (puzzle.count) {    //  not solved yet?
        if (puzzle.count < 10) {
            console.log(puzzle.count + " GUESSES LEFT\n");  //  send a warning
        }
        inquirer.prompt([   //  prompt for a guess
            {
                name: "letter",
                message: "Guess a letter:",
                validate: function (letter) {   //  validate!  Make sure it's a single alpha character, and not already guessed
                    if (letter.match(/^[a-z]$/i) && guesses.indexOf(letter) === -1) {
                        guesses.push(letter);   //  make sure we can only guess this letter once
                        return true;
                    }
                    return false;
                }
            }
        ]).then(guess => {
            // console.log(value);
            var guessResult = puzzle.Guess(guess.letter.toLowerCase());     //  test the guess, store the result for proper display flow
            console.log(puzzle.Show());     //  show the current puzzle state
            if (guessResult) {
                    console.log(right("CORRECT!\n"));
                }
                else {
                    console.log(wrong("INCORRECT!\n"));
                }
            playGame(puzzle);   //  Next guess
        })
    }
    else {  //  game over!
        console.log("You have failed!");
    }
}
