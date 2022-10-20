#!/usr/bin/env node

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

Object.prototype.hash = function hash(prop) {
  const props = prop.split('.');
  if (props.length === 1) {
    return this[prop];
  }
  if (this[props[0]] === undefined) {
    return undefined;
  }
  return this[props[0]].hash(props.slice(1).join('.'));
}

console.log(obj.hash('person.name.some.some'));