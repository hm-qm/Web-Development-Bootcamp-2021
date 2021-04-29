let scores = [1,70,100,2500,9,-12,0,34]
// default sort is not advisable
scores.sort()

// Const primitives cannot be reassigned but Array contents can be reassigned
const nums = [1,2,3,4]

nums.push(5)

// This will produce an error
nums = [1,2,3,4,5,6]
// Memory reference will be stored for shell of array but not contents


// Arrays can also store other arrays
const colors = [['red,crimson'],['orange','orange-red'],['green','aquamarine']]

// TicTacToe gameboard using array within arrays
const gameBoard = [['X','O','X'],['O',null,'X'],['O','O','X']]
// Accessing the middle-most item of the gameboard
gameboard[1][1]