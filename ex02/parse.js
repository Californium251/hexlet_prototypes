#!/usr/bin/env node

const singleTagsList = new Set(['hr', 'img', 'br']);

const parse = ([tagName, ...rest]) => {
  const res = {};
  res.name = tagName;
  res.attributes = {};
  res.body = '';
  res.children = [];
  if (rest.length === 1) {
    const val = rest[0];
    if (typeof val === 'string') {
      res.body = val;
    }
    if (typeof val === 'object' && !Array.isArray(val)) {
      res.attributes = val;
    }
    if (Array.isArray(val)) {
      res.children = val.map((el) => parse(el));
    }
  }
  if (rest.length === 2) {
    const val1 = rest[0];
    const val2 = rest[1];
    if (typeof val1 === 'string') {
      res.body = val1;
      res.children = val2.map((el) => parse(el));
    }
    if (typeof val2 === 'string') {
      res.attributes = val1;
      res.body = val2;
    }
    if (Array.isArray(val2) && typeof val1 === 'object') {
      res.attributes = val1;
      res.children = val2.map((el) => parse(el));
    }
  }
  if (rest.length === 3) {
    res.attributes = rest[0];
    res.body = rest[1];
    res.children = rest[2].map((el) => parse(el));
  }
  return res;
}

const render = ({name, attributes, body, children}) => {
  const attrToStr = (attr) => Object.entries(attr).map(([key, val]) => `${key}="${val}"`).join(' ');
  const attributesStr = Object.keys(attributes).length === 0 ? '>' : ` ${attrToStr(attributes)}>`;
  const singleTag = singleTagsList.has(name) ? true : false;
  const childrenStr = children.length === 0 ? '' : children.map((el) => render(el)).join('');
  const res = [];
  res.push(`<${name}`);
  res.push(attributesStr);
  if (!singleTag) {
    res.push(body);
    res.push(childrenStr);
    res.push(`</${name}>`);
  }
  return res.join('');
}

const test1 = ['html', 'body', [
  ['head', {attr1: 'attribute'}, 'title'],
  ['meta', 'metaData']
]];

const testData = ['html', [
  ['head', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
      ['img', {src: './image.jpg'}]
    ]],
  ]],
]];

console.log(render(parse(testData)));

// export default parse;