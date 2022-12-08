#!/usr/bin/env node

import { garble, GagTypes } from '../build/index.js';

const args = process.argv.slice(2);
const gagType = args.shift();
const text = args.join(' ');

if (args.length < 2 || !(gagType in GagTypes)) {
    console.log(`
Usage:
node bin/garble.js <gagType> <text>

Available gag types:
${Object.keys(GagTypes).join('\n')}
`);
} else {
    console.log(garble(text, GagTypes[gagType]));
}
