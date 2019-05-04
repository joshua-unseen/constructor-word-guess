var Word = require("./Word");
var inquirer = require("inquirer");

var wordArray = [
    "Gorgon",
    "Muad'dib",
    "Leto Atreidies"
];
var count = 0;
var guesses = [];

initGame();

function initGame() {
    // debugger;
    var puzzle = new Word(wordArray[Math.floor(Math.random()*wordArray.length)]);
    count = puzzle.word.length + 5;
    guesses = [];
    console.log(puzzle.Show());
    playGame(puzzle);
}

function playGame(puzzle) {
    if (count) {
        if (count < 10) {
            console.log(count + " GUESSES LEFT\n");
        }
        if (puzzle.solved) {
            console.log("You solved it!");
            return;
        }
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:",
                validate: function(letter) {
                    if (letter.match(/^[a-z]$/i) && guesses.indexOf(letter) === -1) {
                        guesses.push(letter);
                        return true;
                    }
                    return false;
                }
            }
        ]).then(guess => {
            count--;
            // console.log(value);
            puzzle.Guess(guess.letter.toLowerCase());
            console.log(puzzle.Show());
            if (puzzle.goodGuess) {
                console.log("CORRECT!\n");
            }
            else {
                console.log("INCORRECT!\n");
            }
            playGame(puzzle);
        })
    }
    else {
        console.log("You have failed!");
    }
}
