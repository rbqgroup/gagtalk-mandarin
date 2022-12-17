import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import KanaGarbler, { ConsonantMap, VowelMap } from '../kana-garbler.js';
import { createHandlers } from '../util/handler.js';

const initialMap: InitialMap = {
    g: 'g',
    k: 'g',
};
const finalMap: FinalMap = {  // Satisfaction
    '-': 'e',       //      imaginary final for zhi, chi, shi, ri, zi, ci, si
    a: 'a',         // oooo
    ai: 'ai',       // oooo
    an: 'an',       // oooo
    ang: 'ang',     // oooo
    ao: 'a',        // oooo
    e: 'e',         // oooo
    ei: 'ei',       // oooo
    en: 'en',       // oooo
    eng: 'eng',     // oooo
    er: 'e',        // oooo
    i: 'e',         // oo
    ia: 'a',        // ooo
    ian: 'an',      // oo
    iang: 'ang',    // ooo
    iao: 'a',       // oo
    ie: 'e',        // ooo
    in: 'en',       // ooo
    ing: 'eng',     // ooo
    io: 'e',        // o
    iong: 'eng',    // ooo
    iu: 'e',        // oo
    o: 'e',         // ooo
    ong: 'eng',     // oooo
    ou: 'e',        // oo
    u: 'u',         // oooo
    ua: 'a',        // oooo
    uai: 'ai',      // oooo
    uan: 'an',      // oooo
    uang: 'ang',    // oooo
    ueng: 'eng',    // oooo
    ui: 'ei',       // oooo
    un: 'en',       // oooo
    uo: 'e',        // ooo
    ü: 'e',         // oo
    üan: 'an',      // oo
    üe: 'e',        // oo
    ün: 'en',       // oo
    ng: 'ng',       // oooo
};
const specialMap: SpecialMap = {};
const excludedTonesList = new Set(<DefinedPronunciation[]>[]);

const consonantMap: ConsonantMap = {
    k: 'g',
    m: 'w',
    w: 'w',
    g: 'g',
    b: 'w',
};
const vowelMap: VowelMap = {
    a: 'a',
    i: 'e',
    u: 'u',
    e: 'e',
    o: 'a',
};

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);
const kanaGarbler = new KanaGarbler(consonantMap, vowelMap);

const handlers = createHandlers({
    chineseGarbler,
    kanaGarbler,
    bondageClubGarblerLevel: 7,
});

export { handlers, initialMap, finalMap, specialMap, excludedTonesList, consonantMap, vowelMap };
export default handlers;
