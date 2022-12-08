#!/usr/bin/env node

import { garble, GagTypes } from '../build/index.js';

const SampleInput = process.argv.slice(2).join(' ')
    || '天地玄黄 宇宙洪荒 日月盈昃 辰宿列张 The quick brown fox jumps over the lazy dog.';

function generateMarkdownSample(input) {
    return `\
输入：${input}

|   口塞种类   | 翻译结果                                |
|:------------:|-----------------------------------------|
|   布条口塞   | ${garble(input, GagTypes.cleave)}       |
|    开口器    | ${garble(input, GagTypes.ringMask)}     |
|   空心口球   | ${garble(input, GagTypes.hollowedBall)} |
|   实心口球   | ${garble(input, GagTypes.solidBall)}    |
|   深喉口塞   | ${garble(input, GagTypes.deepthroat)}   |
|   束颈口塞   | ${garble(input, GagTypes.mouthCorset)}  |
| 机器音变声器 | ${garble(input, GagTypes.robot)}        |
`;
}

console.log(generateMarkdownSample(SampleInput));
