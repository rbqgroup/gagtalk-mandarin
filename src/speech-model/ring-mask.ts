import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import * as hollowedBall from './hollowed-ball.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { createHandlers } from '../util/handler.js';
import KanaGarbler, { ConsonantMap, VowelMap } from '../kana-garbler.js';

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

const consonantMap: ConsonantMap = {
    ...hollowedBall.consonantMap,
    y: 'y',
    r: 'r',
};
const vowelMap: VowelMap = {
    ...hollowedBall.vowelMap,
};

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const kanaGarbler = new KanaGarbler(consonantMap, vowelMap);

const handlers = createHandlers({
    chineseGarbler,
    kanaGarbler,
    bondageClubGarblerLevel: 5,
});

export { handlers, initialMap, finalMap, specialMap, excludedTonesList, consonantMap, vowelMap };
export default handlers;
