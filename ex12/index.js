#!/usr/bin/env node

import Node from './Node.js';

const tree = new Node(1,
  new Node(2,
    new Node(6),
    new Node(7)),
  new Node(3,
    new Node(4),
    new Node(5)));

console.log(tree.some((key) => key === 2))
