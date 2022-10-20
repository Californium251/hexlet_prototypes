class Node {
  constructor(key) {
    this.key = key || null;
    this.left = null;
    this.right = null;
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
  insert = insert;
}

function insert(key) {
  if (this.key === null) {
    this.key = key;
  }
  if (this.key === key) {
    return;
  }
  if (key > this.getKey()) {
    if (this.getRight() === null) {
      this.right = new Node(key);
      return;
    }
    insert.call(this.getRight(), key);
  }
  if (key < this.getKey()) {
    if (this.getLeft() === null) {
      this.left = new Node(key);
      return;
    }
    insert.call(this.getLeft(), key)
  }
}

export default Node;
