import Node from './Node.js';

const attrToStr = (attr) => (
  Object.keys(attr).length === 0 ? '' : ` ${Object.entries(attr).map(([key, val]) => `${key}="${val}"`).join(' ')}`
);

const childrenToStr = (children) => (
  children.length === 0 ? '' : children.map((el) => el.toString()).join('')
);

function pairedTagToStr() {
  const res = [];
  const attributesStr = attrToStr(this.attributes);
  const childrenStr = childrenToStr(this.children);
  res.push(`<${this.name}`);
  res.push(attributesStr);
  res.push(`>${this.body}`);
  res.push(childrenStr);
  res.push(`</${this.name}>`);
  return res.join('');
}

function PairedTag(name, attributes, body = '', children = []) {
  Node.call(this, name, attributes);
  this.body = body;
  this.children = children;
  this.toString = pairedTagToStr;
}

export default PairedTag;
