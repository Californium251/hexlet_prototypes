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

const htmlTag = buildNode('html', {}, '', []);
const brTag = buildNode('br', {'Настя': 'Я люблю тебя'});
console.log(brTag.toString());

