# constructor-word-guess
Node word-guess game using constructors.  *Dune* themed.

## packages used
Inquirer for user interaction, cli-color for colors

## how to play
Run the program by executing "node index.js".  The program will display one hint in the form of a terrible pun, the unsolved puzzle, and prompt for user input.  Enter letters on the keyboard until you have either solved the puzzle, in which case the program will congratulate you and load the next puzzle, or run out of tries, in which case the program will terminate.

## how it works
The program contains an array of *Dune* related words or phrases.  When executed, it passes a random element of that array to the Word constructor defined in Word.js.  The Word constructor iterates through the letters of the string, passing each to the Letter constructor defined in Letter.js.  The methods in Letter handle guess resolution and determine whether the character or a placeholder is displayed.  The methods in Word display the puzzle string and keep track of guesses left, and whether the current guess succeeded or not.