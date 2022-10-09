#!/usr/bin/env node

import PairedTag from "./PairedTag.js";
import SingleTag from "./SingleTag.js";

const single = new SingleTag('br', {class: "single_tag"});
const paired = new PairedTag('head', {class: "paired_tag"}, 'body', [new SingleTag('meta', {type: 'some'})]);

console.log(single.toString());
console.log(paired.toString());