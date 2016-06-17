//Alpha-beta pruning
'use strict'

const Board = require("../board");
const createAllPossibleRandomStates  = require('./stateGeneration').createAllPossibleRandomStates;
const createAllPossibleDelibrateStates = require('./stateGeneration').createAllPossibleDelibrateStates;
const Node = require("./node");

class Tree {
	constructor (board) {
		this.head = new Node (board);
		this.bestDirections = [];
	}	
	minimax (node, depth, maximizingPlayer) {

		
		if (depth === 0 || node.boardObj.board.gameOver) {
			return node; 
		}
		
		if (maximizingPlayer) {  //ai 

			node.children = createAllPossibleDelibrateStates(node);
			// if (depth === 3) {
			// 	console.log("in mm", node.boardObj.board)
			// }
			let best = -Infinity;
			node.children.forEach(child => {
				// if (depth === 3) {
				// 	console.log("child", child.boardObj.board)
				// }
				let val = this.minimax(child, depth-1, false); 
				if (best instanceof Node) {
					best = best.score > val.score ? best : val;
				}
				else best = best > val.score ? best : val;
			});

			return best;
		}
		
		else { //normal comp
			node.children = createAllPossibleRandomStates(node);
			let best = Infinity;
			// console.log(depth, "p2", node);
			node.children.forEach(child => {
				let val = this.minimax(child, depth - 1, true);
				//we want to assume the worst
				if (best instanceof Node) {
					best = best.score < val.score ? best : val;
				}
				else best = best < val.score ? best : val;
				// bestVal = Math.min(bestVal, val);			
			});
			return best;
		}
	}
}



// let Tree = new tree ();

// let bestMove = Tree.minimax(Tree.head, 6, true);
// console.log("here", bestMove);

module.exports = Tree;
//The Minimax is a recursive algorithm which can be used for solving two-player zero-sum games
//steps: 
	//searches through the space of possible game states creating a tree
	// which is expanded until it reaches a particular predefined depth
		//how deep should I define it

	//each level represents the turn of one of the two players. In order to win each player must select the move that minimizes the opponent’s maximum payoff.
	
//http://blog.datumbox.com/using-artificial-intelligence-to-solve-the-2048-game-java-code/

