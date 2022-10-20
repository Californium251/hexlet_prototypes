#!/usr/bin/env node

import Money from './Money.js';

const money = new Money(100, 'usd');
const money2 = new Money(50, 'eur');

console.log(money.add(money2));
