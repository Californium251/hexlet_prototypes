#!/usr/bin/env node

const getLast = (arr) => arr[arr.length - 1];
const removeCard = (arr) => arr.length = arr.length - 1;
const move = (arr1, arr2) => {
  arr1.unshift(getLast(arr1));
  arr1.unshift(getLast(arr2))
  removeCard(arr1);
  removeCard(arr2);
}

class Drunkard {
  constructor() {

  }
  run(num1, num2) {
    let round = 0;
    const makeTurn = (num1, num2) => {
      if (num1.length === 0 && num2.length !== 0) {
        return `Second player. Round: ${round}`;
      }
      if (num1.length !== 0 && num2.length === 0) {
        return `First player. Round: ${round}`;
      }
      if ((num1.length === 0 && num2.length === 0) || round === 100) {
        return 'Botva!';
      }
      round += 1;
      const card1 = getLast(num1);
      const card2 = getLast(num2);
      if (card1 === card2) {
        removeCard(num1);
        removeCard(num2);
      }
      if (card1 > card2) {
        move(num1, num2);
      }
      if (card1 < card2) {
        move(num2, num1);
      }
      return makeTurn(num1, num2);
    }
    return makeTurn(num1, num2);
  }
}

const a = new Drunkard();

console.log(a.run([1, 3], [2, 1]));
