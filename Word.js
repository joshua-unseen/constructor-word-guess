var Letter = require("./Letter.js");

function Word(theWord) {
    this.word = [];
    this.solved = false;
    this.goodGuess = false;
    this.count = 0;
    
    for (var i = 0; i < theWord.length; i++) {
        var theChar = theWord.charAt(i)
        // var tempCount = [];
        var letter = new Letter(theChar);
        if (this.word.indexOf(letter) === -1 && theChar.match(/^[a-z]$/)) {
            // tempCount.push(theChar);
            this.count++;
        }
        this.word.push(letter);
    }
    this.count += 7;
    
    
    this.Show = function() {
        var displayString = this.word.join(" ");
        return "\n" + displayString + "\n";
    }
    this.Guess = function(letter) {
        // console.log("Word " + letter);
        var goodGuess = false;
        this.solved = true;
        this.word.forEach(element => {
            if (element.Test(letter)) {
                goodGuess = true;
            }
            else if (element.guessed === false) {
                this.solved = false;
            }
        });
        if (goodGuess) {
            console.log("CORRECT!\n");
        }
        else {
            console.log("INCORRECT!\n");
        }
    }
}

module.exports = Word;

// var test = new Word("testing");
// console.log(test.word);
// console.log(test.Show());

// test.Guess("t");
// console.log(test.word);
// console.log(test.Show());
