import Node from './Node.js';
import childrenToStr from '../ex03/childrenToStr.js';
import attrToStr from '../ex03/attrToStr.js';

class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }
  toString() {
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
}

export default PairedTag;
