export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  // BEGIN (write your solution here)
  getCount = function getCount() {
    let left = 0;
    let right = 0;
    if (this.left !== null) {
      left = getCount.call(this.left);
    }
    if (this.right !== null) {
      right = getCount.call(this.right);
    }
    return 1 + left + right;
  }

  getSum = function getSum() {
    let leftSum = 0;
    let rightSum = 0;
    if (this.left !== null) {
      leftSum = getSum.call(this.left);
    }
    if (this.right !== null) {
      rightSum = getSum.call(this.right);
    }
    return this.key + leftSum + rightSum;
  }

  toArray = function toArray() {
    const res = [];
    function f(acc) {
      acc.push(this.key);
      if (this.left !== null) {
        f.call(this.left, acc);
      }
      if (this.right !== null) {
        f.call(this.right, acc);
      }
    }
    f.call(this, res);
    return res;
  };

  toString = function toString() {
    const arr = this.toArray();
    return '(' + arr.join(', ') + ')';
  };

  every = function every(callback) {
    if (!callback(this.key)) {
      return false;
    }
    let left = true;
    let right = true;
    if (this.left !== null) {
      left = every.call(this.left, callback);
    }
    if (this.right !== null) {
      right = every.call(this.right, callback);
    }
    return left && right;
  };

  some = function some(callback) {
    if (callback(this.key)) {
      return true;
    }
    let left = false;
    let right = false;
    if (this.left !== null) {
      left = some.call(this.left, callback);
    }
    if (this.right !== null) {
      right = some.call(this.right, callback);
    }
    return left || right;
  }
  // END
}
