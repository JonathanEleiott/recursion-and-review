// FACTORIAL
// 5! = 5 * 4 * 3 * 2 * 1 -> 120
// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 -> 5040
// 1! = 1

// const factorial = (num) => {
//   let total = 1;
//   for(let i = num; i > 0; i--) {
//     total = total * i;
//   }
//   return total;
// }

const factorial = (num) => {
  if(num < 1) {
    return "Number must be greater than or equal to 1"
  }

  // BASE CASE
  if(num === 1) {
    return 1;
  } else {
    // RECURSION
    return num * factorial(num - 1);
  }
}

// console.log(factorial(7));

// facotrial(5) = 5 * factorial(4) => 5 * 24 => 120
// factorial(4) = 4 * factorial(3) => 4 * 6 => 24
// factorial(3) = 3 * factorial(2) => 3 * 2 => 6
// factorial(2) = 2 * factorial(1) => 2 * 1 => 2
// factorial(1) = 1

// 1 1 2 3 5 8 13 21 34 55 89




// POWER

// 3^4 = 3 * 3 * 3 * 3 = 81
// 2^7 = 2 * 2 * 2 * 2 * 2 * 2 * 2 = 128

// 3^1 = 3
// 2^1 = 2
// 7^1 = 7

const power = (base, exponent) => {
  if(exponent === 1) {
    return base;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(3, 4));

// power(2, 7) = 2 * power(2, 6) => 2 * 64 = 128
// power(2, 6) = 2 * power(2, 5) => 2 * 32 = 64
// power(2, 5) = 2 * power(2, 4) => 2 * 16 = 32
// power(2, 4) = 2 * power(2, 3) => 2 * 8 = 16
// power(2, 3) = 2 * power(2, 2) => 2 * 4 = 8
// power(2, 2) = 2 * power(2, 1) => 2 * 2 = 4
// power(2, 1) = 2


class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(rootNode) {
    this.root = rootNode;
  }

  preOrderLog() {

  }
  
  inOrderLog() {

  }

  postOrderLog() {

  }
}


// DFS - Depth First Search
// pre-order
// in-order
// post-order

// BFS - Breadth First Search