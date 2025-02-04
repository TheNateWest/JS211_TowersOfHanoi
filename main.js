'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
 // pop() the last piece in startStack and push() to the endStack
 //stacks[startStack]

let piece = stacks[startStack].pop() 

stacks[endStack].push(piece)
}

// if (condition) {
//   run code
// }

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {

   /**
   * ORDER OF OPERATIONS:
   * 1. check if inputs are a, b, or c
   * 2. check if start is empty
   * 3. check if end is empty
   * 4. compare stacks
   */

   let legalValues = ['a', 'b', 'c'];

   if (legalValues.includes(startStack) && legalValues.includes(endStack)) {
     if (stacks[startStack].length === 0) {
      return false
     }

     if (stacks[endStack].length === 0) {
      return true
     }

     if (stacks[startStack].slice(-1) < stacks[endStack].slice(-1)) {
      return true
     }

     return false
   }

   return false





  // 5. Enter something besides a, b, c = false
    // if !a or !b or !c

   
      // 4. Select a startStack that's empty = false
        // if stacks.startStack.legnth `= 0
  

  
      // 1. Move a startStack value to an empty endStack = true
      // if endStack is empty, which means if .length = 0

      
    // 2. Move a startStack value to an endStack if the last endStack value is a higher number = true

  
    // 3. Move a startStack value to an endStack if the last endStack value is a lower number = false
      // slice(-1) gets the last element of an array
  
  
  // this function should return true or false
  
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // If B or C arrays = [4,3,2,1] you win!
if (stacks.b.length === 4 || stacks.c.length === 4) {
  return true
} else {
  return false
}

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Take in the two arguments
  // Check if isLegal
    // if true, movePiece
    // if false, display error message
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);

  } else {
    console.log('Illegal move');
  }


  // Call checkForWin
    // if true, display win message
    // if false, keep playing
  if (checkForWin()) {
    console.log("Congrats bruh");
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
