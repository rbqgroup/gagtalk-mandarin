import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler from '../chinese-garbler.js';
const initialMap = {
    g: 'g',
    k: 'g',
};
const finalMap = {
    '-': 'e',
    a: 'a',
    ai: 'ai',
    an: 'an',
    ang: 'ang',
    ao: 'a',
    e: 'e',
    ei: 'ei',
    en: 'en',
    eng: 'eng',
    er: 'e',
    i: 'e',
    ia: 'a',
    ian: 'an',
    iang: 'ang',
    iao: 'a',
    ie: 'e',
    in: 'en',
    ing: 'eng',
    io: 'e',
    iong: 'eng',
    iu: 'e',
    o: 'e',
    ong: 'eng',
    ou: 'e',
    u: 'u',
    ua: 'a',
    uai: 'ai',
    uan: 'an',
    uang: 'ang',
    ueng: 'eng',
    ui: 'ei',
    un: 'en',
    uo: 'e',
    ü: 'e',
    üan: 'an',
    üe: 'e',
    ün: 'en',
    ng: 'ng', // oooo
};
const specialMap = {};
const excludedTonesList = new Set([]);
const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const handlers = [{
        predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
        func: text => chineseGarbler.garble(text),
    }, {
        predicate: char => /[a-zA-Z]/.test(char),
        func: text => BondageClubGarbler.SpeechGarbleByGagLevel(7, text),
    }];
export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
//# sourceMappingURL=solid-ball.js.map