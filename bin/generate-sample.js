#!/usr/bin/env node

import { garble, GagTypes } from '../build/index.js';

const SampleInput = process.argv.slice(2).join(' ')
    || '天地玄黄 宇宙洪荒 日月盈昃 辰宿列张 The quick brown fox jumps over the lazy dog.';

function generateMarkdownSample(input) {
    return `\
输入：${input}

| GagTypes     | 输出结果                                |
|--------------|-----------------------------------------|
| cleave       | ${garble(input, GagTypes.cleave)}       |
| ringMask     | ${garble(input, GagTypes.ringMask)}     |
| hollowedBall | ${garble(input, GagTypes.hollowedBall)} |
| solidBall    | ${garble(input, GagTypes.solidBall)}    |
| deepthroat   | ${garble(input, GagTypes.deepthroat)}   |
| mouthCorset  | ${garble(input, GagTypes.mouthCorset)}  |
| robot        | ${garble(input, GagTypes.robot)}        |
`;
}

console.log(generateMarkdownSample(SampleInput));
