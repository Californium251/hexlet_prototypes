import SingleTag from './SingleTag.js';
import PairedTag from './PairedTag.js';

const singleTagsCollection = new Set(['hr', 'br', 'img']);

const buildNode = (name, attributes, ...rest) => (
  singleTagsCollection.has(name) ? new SingleTag(name, attributes) : new PairedTag(name, attributes, rest[0], rest[1])
);

export default buildNode;
