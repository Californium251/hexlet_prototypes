class Node {
  constructor(key, left, right) {
    if (checkGreaterThanMin.call(this) && checkLessThanMax.call(this)) {
      setLeft.call(this, left);
      setRight.call(this, right);
      setKey.call(this, key);
    };
  }
  getKey() {
    return this.key;
  }
  getRight() {
    return this.right;
  }
  getLeft() {
    return this.left;
  }
  search = search;
}

function search(key) {
  if (key === this.key) {
    return this;
  }
  if (key < this.key) {
    if (this.left === null) {
      return null;
    }
    return search.call(this.left, key);
  }
  if (this.right === null) {
    return null;
  }
  return search.call(this.right, key);
}

function setKey(key) {
  if (key === undefined) {
    this.key = null
  } else {
    this.key = key;
  }
}

function setLeft(left) {
  this.left = left || null;
}

function setRight(right) {
  this.right = right || null;
}

function getRightest() {
  if (this.right !== null) {
    return getRightest.call(this.right);
  }
  return this.key;
}

function getLeftest() {
  if (this.left !== null) {
    return getLeftest.call(this.left);
  }
  return this.key;
}

function checkGreaterThanMin() {
  if (this.left !== null && undefined) {
    const min = getRightest.call(this.left);
    return this.key > min;
  }
  return true;
}

function checkLessThanMax() {
  if (this.right !== null && undefined) {
    const max = getLeftest.call(this.right);
    return this.key < max;
  }
  return true;
}

export default Node;
