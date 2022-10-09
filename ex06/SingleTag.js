import Node from './Node.js';

const attrToStr = (attr) => (
  Object.keys(attr).length === 0 ? '' : ` ${Object.entries(attr).map(([key, val]) => `${key}="${val}"`).join(' ')}`
);

function singleTagToStr() {
  return `<${this.name}${attrToStr(this.attributes)}>`
}

function SingleTag(name, attributes) {
  Node.call(this, name, attributes);
  this.toString = singleTagToStr;
}

export default SingleTag;
