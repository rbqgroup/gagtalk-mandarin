import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { ConditionalHandler } from '../index.js';

const initialMap: InitialMap = {
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
const finalMap: FinalMap = {
    '-': 'e',       // oo   imaginary final for zhi, chi, shi, ri, zi, ci, si
    a: 'a',         // oooo
    ai: 'ai',       // oooo
    an: 'an',       // oooo
    ang: 'ang',     // oooo
    ao: 'a',        // oooo
    e: 'e',         // oooo
    ei: 'ei',       // oooo
    en: 'en',       // oooo
    eng: 'eng',     // oooo
    er: 'er',       // oooo
    i: 'i',         // oooo
    ia: 'ia',       // oooo
    ian: 'ian',     // oooo
    iang: 'iang',   // oooo
    iao: 'ia',      // oooo
    ie: 'ie',       // oooo
    in: 'in',       // oooo
    ing: 'ing',     // oooo
    io: 'ia',       // ooo
    iong: 'ing',    // ooo
    iu: 'ie',       // oo
    o: 'e',         // ooo
    ong: 'eng',     // oooo
    ou: 'e',        // oo
    u: 'u',         // ooo
    ua: 'ua',       // ooo
    uai: 'uai',     // ooo
    uan: 'uan',     // ooo
    uang: 'uang',   // ooo
    ueng: 'ueng',   // ooo
    ui: 'ui',       // ooo
    un: 'un',       // ooo
    uo: 'e',        // oo
    ü: 'e',         // oo
    üan: 'an',      // o
    üe: 'e',        // o
    ün: 'en',       // o
    ng: 'ng',       // oooo
};
const specialMap: SpecialMap = {};
const excludedTonesList = new Set(<DefinedPronunciation[]>[]);

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: text => chineseGarbler.garble(text),
}, {
    predicate: char => /[a-zA-Z]/.test(char),
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(3, text),
}];

export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
