class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
  getCount = function getCount() {
    let left = 0;
    let right = 0;
    if (this === null) {
      return 1;
    }
    if (this.left !== null) {
      left = getCount.call(this.left);
    }
    if (this.right !== null) {
      right = getCount.call(this.right);
    }
    return 1 + left + right;
  }
  getCountLeft = function getCountLeft() {
    if (this.left === null) {
      return 0;
    }
    return this.getCount.call(this.left);
  }
  getCountRight = function getCountRight() {
    if (this.right === null) {
      return 0;
    }
    return this.getCount.call(this.right);
  }
  isBalanced = function isBalanced() {
    if (Math.abs(this.getCountLeft() - this.getCountRight()) > 2) {
      return false;
    }
    let left = true;
    let right = true;
    if (this.left !== null) {
      left = isBalanced.call(this.left);
    }
    if (this.right !== null) {
      right = isBalanced.call(this.right);
    }
    return left && right;
  }
}

export default Node;
