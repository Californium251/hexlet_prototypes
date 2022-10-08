import Node from './Node.js';
import attrToStr from '../ex03/attrToStr.js';

class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }
  toString() {
    return `<${this.name}${attrToStr(this.attributes)}>`
  }
}

export default SingleTag;
