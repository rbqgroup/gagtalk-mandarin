import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import KanaGarbler, { ConsonantMap, VowelMap } from '../kana-garbler.js';
import { createHandlers } from '../util/handler.js';

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
    ü: 'i',         // ooo
    üan: 'ian',      // oo
    üe: 'ie',        // oo
    ün: 'in',       // oo
    ng: 'ng',       // oooo
};
const specialMap: SpecialMap = {};
const excludedTonesList = new Set(<DefinedPronunciation[]>[]);

const consonantMap: ConsonantMap = {
    k: 'k',
    s: 'h',
    t: 't',
    n: 'n',
    h: 'h',
    m: 'w',
    y: 'y',
    r: 'r',
    w: 'w',
    g: 'g',
    z: undefined,
    d: 'd',
    b: 'w',
    p: 'h',
};
const vowelMap: VowelMap = {
    a: 'a',
    i: 'i',
    u: 'u',
    e: 'e',
    o: 'o',
};

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const kanaGarbler = new KanaGarbler(consonantMap, vowelMap);

const handlers = createHandlers({
    chineseGarbler,
    kanaGarbler,
    bondageClubGarblerLevel: 2,
});

export { handlers, initialMap, finalMap, specialMap, excludedTonesList, consonantMap, vowelMap };
export default handlers;
