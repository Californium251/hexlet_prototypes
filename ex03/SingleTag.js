import attrToStr from './attrToStr.js';

function singleTagToString() {
  return `<${this.name}${attrToStr(this.attributes)}>`
}

function SingleTag (name, attributes) {
  this.name = name;
  this.attributes = attributes ? attributes : [];
  this.toString = singleTagToString;
}

export default SingleTag;
