import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { ConditionalHandler } from '../index.js';

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

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: text => chineseGarbler.garble(text),
}, {
    predicate: char => /[a-zA-Z]/.test(char),
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(7, text),
}];

export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
