'use strict'
const Board = require("../board");
const Tree = require('./tree');

// const render = require('../frontend/render.js');

const board = new Board ();
const aiGame = new Tree(board);
const game = aiGame.head.boardObj


game.fillRandomEmptySpace();
//aplha beta
// while(!gameOver) {
	// console.log("before", aiGame.head.boardObj.board)
	// let bestMove = aiGame.alphaBeta(aiGame.head, 3, -Infinity, Infinity, true);
	// console.log("best", bestMove)
	// let orientation = bestMove.boardObj.lastOrientation;
	// let direction = bestMove.boardObj.lastDirection;
	// console.log("move", orientation, direction);
	// game.update(bestMove.lastOrientation, bestMove.lastDirection);
	// console.log("after playre one",aiGame.head.boardObj.board);
	// game.fillRandomEmptySpace();
// }


//minmax
while(!game.gameOver) {

	game.hasWon();
	game.hasLost();

	console.log("before", aiGame.head.boardObj.board)
	// render();
	let bestMove = aiGame.minimax(aiGame.head, 3, true);
	console.log("gameOver", game.actualScore());
	console.log("gameOver", game.gameOver);
	let orientation = bestMove.boardObj.lastOrientation;
	let direction = bestMove.boardObj.lastDirection;
	console.log("move", orientation, direction);
	game.update(orientation, direction);
	console.log("after playre one",aiGame.head.boardObj.board);
	game.fillRandomEmptySpace();
	console.log("after Random",aiGame.head.boardObj.board);

} 
//let bestMove = Tree.minimax(Tree.head, 3, true);