#!/usr/bin/env node

import Node from './Node.js';

const tree = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

console.log(tree.isBalanced())
