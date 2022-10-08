#!/usr/bin/env node
const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);

function setValueOf(value) {
  this.valueOf = () => value;
};

function getPrevVal() {
  return this.prevVal ? this.prevVal : 0;
}

function setPrevVal(value) {
  this.prevVal = value;
}

function constructor(context, args) {
  function f(...rest) {
    return constructor(f, rest);
  }
  const prevVal = getPrevVal.apply(context);
  setPrevVal.call(f, sum(args) + prevVal);
  setValueOf.call(f, getPrevVal.apply(f));
  return f;
}

function magic(...args) {
  return constructor(magic, args)
}

console.log(magic(1,2)(1,4)(1) + 0);
