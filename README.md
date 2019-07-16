# Tic-Tac-Toe
A 2 player version of the classic game

**domain**: https://destinc.github.io/Tic-Tac-Toe/

## description and user story 
This was a challenge to build a game from scratch using HTML/CSS/Javascript
I decided to create a classic game with an "old school" look.
The game play is straight forward. Player 1 will be "X" and Player 2 will be "O". Take turns clicking on squares until you get 3 in a row, horizontally, vertically, or diagonally. 

## technologies & packages
Made with vanilla js, css, html and canvas.

## major problems & solutions
Putting together the logic for a 9 square game with 8 possible solutions was tricky. Once I realized that I could create empty arrays for the initial state and then a series of if else statements to cover the possible outcomes, it was smooth sailing

## MVP
-This is a fully functioning 2 player game
-Was able to add some styling details after mvp, such as simple css animations
-In the future, I'd love to add the option for players to enter their name and track their score over multiple games. I'd also like to explore building an AI to allow a single player option.


## _code snippet_
    This is the initial game state in which all cells are empty and no x's or o's have been added to the board. It took awhile for me to realize that I needed both arrays because at first glance they seem redundant, but the first array initializes the game board, the second array keeps track of when players take their turn.

 	let marked = [false, false, false, false, false, false, false, false, false];
	let  marks = ['', '', '', '', '', '', '', '', ''];

