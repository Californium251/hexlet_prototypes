#!/usr/bin/env node

import Node from './Node.js';

const tree = new Node(
  9,
  new Node(
    4,
    new Node(3),
    new Node(
      6,
      new Node(5),
      new Node(7),
    ),
  ),
  new Node(
    17,
    null,
    new Node(
      22,
      new Node(20),
      null,
    ),
  ),
);

console.log(tree);
