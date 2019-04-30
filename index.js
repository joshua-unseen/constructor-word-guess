var Word = require("./Word");
var input = require("inquirer");

input.prompt([
    {
        name: "guess",
        message: "Guess a letter:",
        validate: function(value) {
            if (value.match(/^[a-z]$/i)) {
                return true;
            }
            return false;
        }
    }
]).then(value => {
    console.log(value);
})