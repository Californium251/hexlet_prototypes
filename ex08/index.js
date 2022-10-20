#!/usr/bin/env node

function speak(name) {
  return `Hello ${name}`;
}

Function.prototype.wrap = function wrap(callback) {
  const original = this;
  function toBeReturned(name1, name2) {
    return callback(original, name1, name2);
  }
  return toBeReturned;
}

const newSpeak = speak.wrap((original, yourName, myName) => {
  const greeting = original(yourName);
  return `${greeting}, my name is ${myName}`;
});

console.log(newSpeak('Mary', 'Kate'));