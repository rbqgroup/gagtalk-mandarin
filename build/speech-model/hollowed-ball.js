import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler from '../chinese-garbler.js';
import * as solidBall from './solid-ball.js';
const initialMap = {
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
const finalMap = {
    ...solidBall.finalMap,
};
const specialMap = {
    ...solidBall.specialMap,
};
const excludedTonesList = new Set([
    ...solidBall.excludedTonesList,
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
//# sourceMappingURL=hollowed-ball.js.map