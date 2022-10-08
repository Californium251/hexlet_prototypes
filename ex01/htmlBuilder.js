#!/usr/bin/env node

const buildHtml = (data) => {
  const makeStrings = (arr) => arr.map(([tagName, ...rest]) => {
    const createAttributes = (attributes) => Object.entries(attributes).map(([key, value]) => `${key}="${value}"`).join(' ');
    if (rest.length === 0) {
      return `<${tagName}></${tagName}>`
    }
    if (rest.length === 1) {
      if (typeof rest[0] === 'string') {
        return `<${tagName}>${rest[0]}</${tagName}>`;
      }
      if (typeof rest[0] === 'object' && !Array.isArray(rest[0])) {
        return `<${tagName} ${createAttributes(rest[0])}></${tagName}>`;
      }
      return `<${tagName}>${makeStrings(rest[0])}</${tagName}>`;
    }
    if (rest.length === 2) {
      if (typeof rest[0] === 'string') {
        return `<${tagName}>${rest[0]}${makeStrings(rest[1])}</${tagName}>`;
      }
      if (typeof rest[1] === 'string') {
        return `<${tagName} ${createAttributes(rest[0])}>${rest[1]}</${tagName}>`;
      }
      return `<${tagName} ${createAttributes(rest[0])}>${makeStrings(rest[1])}</${tagName}>`
    }
    return `<${tagName} ${createAttributes(rest[0])}>${rest[1]}${makeStrings(rest[2])}</${tagName}>`
  }).join('');
  const dataToBeProcessed = [data];
  return makeStrings(dataToBeProcessed, '');
}

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

console.log(buildHtml(testData));

// export default buildHtml;