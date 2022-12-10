import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import * as solidBall from './solid-ball.js';
import { ConditionalHandler } from '../index.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';

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

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: (text, options) => chineseGarbler.garble(text, options),
}, {
    predicate: char => /[a-zA-Z]/.test(char),
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(6, text),
}];

export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
