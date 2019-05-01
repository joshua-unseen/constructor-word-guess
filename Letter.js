function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed) {
            return this.char;
        }
        else if (this.char.match(/^[^a-z]$/i)) {
            this.guessed = true;
            return this.char;
        }
        else {
            return "_";
        }
    }
    this.Test = function(letter) {
        // console.log("Letter " + letter);
        if (letter === this.char.toLowerCase()) {
            this.guessed = true;
        }
        return this.guessed;
    }
}

module.exports = Letter;

// var test = new Letter("\'");

// test.Test("b");
// console.log(test.guessed);
// console.log(test.toString());

// test.Test("a");
// console.log(test.guessed);
// console.log(test.toString());
