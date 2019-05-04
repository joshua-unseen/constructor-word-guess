var Letter = require("./Letter.js");

function Word(theWord) {
    this.word = [];
    this.solved = false;
    this.goodGuess = false;
    
    for (var i = 0; i < theWord.length; i++) {
        var letter = new Letter(theWord.charAt(i));
        this.word.push(letter);
    }
    
    this.GenCount = function() {
        var tempCount =[];
        for (var i = 0; i < theWord.length; i++) {
            var theLetter = theWord.charAt(i);
            if (tempCount.indexOf(theLetter) === -1 && theLetter.match(/^[a-z]$/)) {
                tempCount.push(theLetter);
            }
        }
        return tempCount.length + 6;
    }
    this.count = this.GenCount();
    
    this.Show = function() {
        var displayString = this.word.join(" ");
        return "\n" + displayString + "\n";
    }
    this.Guess = function(letter) {
        // console.log("Word " + letter);
        this.goodGuess = false;
        this.solved = true;
        this.word.forEach(element => {
            if (element.Test(letter)) {
                this.goodGuess = true;
            }
            else if (element.guessed === false) {
                this.solved = false;
            }
        });
    }
}

module.exports = Word;

// var test = new Word("testing");
// console.log(test.word);
// console.log(test.Show());

// test.Guess("t");
// console.log(test.word);
// console.log(test.Show());
