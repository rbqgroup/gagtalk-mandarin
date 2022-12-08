import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import * as hollowedBall from './hollowed-ball.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { ConditionalHandler } from '../index.js';

const initialMap: InitialMap = {
    ...hollowedBall.initialMap,
    n: 'r',
    l: 'r',
    zh: 'r',
    r: 'r',
};
const finalMap: FinalMap = {
    ...hollowedBall.finalMap,
    er: 'er',
};
const specialMap: SpecialMap = {
    ...hollowedBall.specialMap,
};
const excludedTonesList = new Set(<DefinedPronunciation[]>[
    ...hollowedBall.excludedTonesList,
]);

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: text => chineseGarbler.garble(text),
}, {
    predicate: char => /[a-zA-Z]/.test(char),
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(5, text),
}];

export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
