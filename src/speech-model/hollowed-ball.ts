import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import * as solidBall from './solid-ball.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { createHandlers } from '../util/handler.js';
import KanaGarbler, { ConsonantMap, VowelMap } from '../kana-garbler.js';

const initialMap: InitialMap = {
    ...solidBall.initialMap,
    p: 'h',
    f: 'h',
    k: 'k',
    h: 'h',
    x: 'h',
    ch: 'h',
    sh: 'h',
    c: 'h',
    s: 'h',
};
const finalMap: FinalMap = {
    ...solidBall.finalMap,
};
const specialMap: SpecialMap = {
    ...solidBall.specialMap,
};
const excludedTonesList = new Set(<DefinedPronunciation[]>[
    ...solidBall.excludedTonesList,
]);

const consonantMap: ConsonantMap = {
    ...solidBall.consonantMap,
    k: 'k',
    s: 'h',
    h: 'h',
};
const vowelMap: VowelMap = {
    ...solidBall.vowelMap,
};

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const kanaGarbler = new KanaGarbler(consonantMap, vowelMap);

const handlers = createHandlers({
    chineseGarbler,
    kanaGarbler,
    bondageClubGarblerLevel: 6,
});

export { handlers, initialMap, finalMap, specialMap, excludedTonesList, consonantMap, vowelMap };
export default handlers;
