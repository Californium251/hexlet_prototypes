import attrToStr from './attrToStr.js';
import childrenToStr from './childrenToStr.js';

function pairedTagToString() {
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

function PairedTag (name, attributes, body, children) {
  this.name = name;
  this.attributes = attributes ? attributes : [];
  this.body = body;
  this.children = children ? children : [];
  this.toString = pairedTagToString;
}

export default PairedTag;
