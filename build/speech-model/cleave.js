import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler from '../chinese-garbler.js';
const initialMap = {
    b: 'u',
    p: 'f',
    m: 'u',
    f: 'f',
    d: 'd',
    t: 't',
    n: 'n',
    l: 'l',
    g: 'g',
    k: 'k',
    h: 'h',
    j: undefined,
    q: 'h',
    x: 'h',
    zh: 'r',
    ch: 'sh',
    sh: 'sh',
    r: 'r',
    z: undefined,
    c: 'sh',
    s: 'sh',
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
    er: 'er',
    i: 'i',
    ia: 'ia',
    ian: 'ian',
    iang: 'iang',
    iao: 'ia',
    ie: 'ie',
    in: 'in',
    ing: 'ing',
    io: 'ia',
    iong: 'ing',
    iu: 'ie',
    o: 'e',
    ong: 'eng',
    ou: 'e',
    u: 'u',
    ua: 'ua',
    uai: 'uai',
    uan: 'uan',
    uang: 'uang',
    ueng: 'ueng',
    ui: 'ui',
    un: 'un',
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
        func: text => BondageClubGarbler.SpeechGarbleByGagLevel(3, text),
    }];
export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
//# sourceMappingURL=cleave.js.map