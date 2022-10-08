#!/usr/bin/env node

import buildNode from './buildNode.js';

const testData = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

const htmlTag = buildNode('html', {class: 'Some class'}, '', []);
const brTag = buildNode('br', {'class': 'some class'});
console.log(htmlTag.toString());

