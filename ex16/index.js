#!/usr/bin/env node

import promisify from './promisify.js';
import * as fs from 'node:fs';

const readfile = promisify(fs.readFile);

readfile('/Users/maximkurepov/hexlet/hexlet_prototypes/ex16/promisify.js', 'utf-8').then((data) => console.log(data))

