function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed) {
            return this.char;
        }
        else {
            return "_";
        }
    }
    this.Test = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

// var test = new Letter("a");

// test.Test("b");
// console.log(test.guessed);
// console.log(test.toString());

// test.Test("a");
// console.log(test.guessed);
// console.log(test.toString());
