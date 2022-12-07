import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler from '../chinese-garbler.js';
import * as hollowedBall from './hollowed-ball.js';
const initialMap = {
    ...hollowedBall.initialMap,
    n: 'r',
    l: 'r',
    zh: 'r',
    r: 'r',
};
const finalMap = {
    ...hollowedBall.finalMap,
    er: 'er',
};
const specialMap = {
    ...hollowedBall.specialMap,
};
const excludedTonesList = new Set([
    ...hollowedBall.excludedTonesList,
]);
const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const handlers = [{
        predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
        func: text => chineseGarbler.garble(text),
    }, {
        predicate: char => /[a-zA-Z]/.test(char),
        func: text => BondageClubGarbler.SpeechGarbleByGagLevel(6, text),
    }];
export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
//# sourceMappingURL=ring-mask.js.map