import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler from '../chinese-garbler.js';
const initialMap = {
// g: 'g',         // better disable since 'g' don't have many onomatopoeia words ...
// k: 'g',         // ... despite it's speakable
};
const finalMap = {
    '-': 'e',
    a: 'a',
    ai: 'ai',
    an: 'en',
    ang: 'ang',
    ao: 'a',
    e: 'e',
    ei: 'ei',
    en: 'en',
    eng: 'en',
    er: 'e',
    i: 'e',
    ia: 'a',
    ian: 'en',
    iang: 'ang',
    iao: 'a',
    ie: 'e',
    in: 'en',
    ing: 'en',
    io: 'u',
    iong: 'en',
    iu: 'e',
    o: 'u',
    ong: 'en',
    ou: 'e',
    u: 'u',
    ua: 'a',
    uai: 'ai',
    uan: 'en',
    uang: 'ang',
    ueng: 'en',
    ui: 'ei',
    un: 'en',
    uo: 'e',
    ü: 'u',
    üan: 'en',
    üe: 'e',
    ün: 'en',
    ng: 'ng', // oooo
};
const specialMap = {
    gu: 'gu',
    heng: 'heng',
};
const excludedTonesList = new Set([
    'u2', 'gu3', 'gu4',
]);
const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList, {
    tone: 'none',
});
const handlers = [{
        predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
        func: text => chineseGarbler.garble(text),
    }, {
        predicate: char => /[a-zA-Z]/.test(char),
        func: text => BondageClubGarbler.SpeechGarbleByGagLevel(7, text),
    }];
export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
//# sourceMappingURL=deepthroat.js.map