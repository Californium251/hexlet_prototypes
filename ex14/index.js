#!/usr/bin/env node

import Random from './Random.js';

const seq = new Random(10);
console.log(seq);
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
seq.getNext();
console.log(seq.sequence.join(', '));
seq.reset();
console.log(seq.sequence.join(', '));