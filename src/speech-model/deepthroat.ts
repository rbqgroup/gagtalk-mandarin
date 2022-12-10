import BondageClubGarbler from '../lib/bondage-club-garbler.js';
import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import { ConditionalHandler } from '../index.js';

const initialMap: InitialMap = {
    // g: 'g',         // better disable since 'g' don't have many onomatopoeia words ...
    // k: 'g',         // ... despite it's speakable
};
const finalMap: FinalMap = {
    '-': 'e',       // oo   imaginary final for zhi, chi, shi, ri, zi, ci, si
    a: 'a',         // oooo
    ai: 'ai',       // oooo
    an: 'en',       // oo
    ang: 'ang',     // oooo
    ao: 'a',        // ooo
    e: 'e',         // oooo
    ei: 'ei',       // oooo
    en: 'en',       // oooo
    eng: 'en',      // ooo
    er: 'e',        // oooo
    i: 'e',         // oooo
    ia: 'a',        // oo
    ian: 'en',      // oo
    iang: 'ang',    // oooo
    iao: 'a',       // oo
    ie: 'e',        // oo
    in: 'en',       // ooo
    ing: 'en',      // oo
    io: 'u',        // oo
    iong: 'en',     // oo
    iu: 'e',        // oo
    o: 'u',         // o
    ong: 'en',      // ooo
    ou: 'e',        // oo
    u: 'u',         // oooo
    ua: 'a',        // ooo
    uai: 'ai',      // oooo
    uan: 'en',      // ooo
    uang: 'ang',    // ooo
    ueng: 'en',     // ooo
    ui: 'ei',       // oooo
    un: 'en',       // oooo
    uo: 'e',        // oooo
    ü: 'u',         // o
    üan: 'en',      // o
    üe: 'e',        // oo
    ün: 'en',       // ooo
    ng: 'ng',       // oooo
};
const specialMap: SpecialMap = {
    gu: 'gu',
    heng: 'heng',
};
const excludedTonesList = new Set(<DefinedPronunciation[]>[
    'u2', 'gu3', 'gu4',
]);

const chineseGarbler = new ChineseGarbler(initialMap, finalMap, specialMap, excludedTonesList);

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: (text, options) => chineseGarbler.garble(text, {
        ...options,
        toneStyle: 'none',
        preserveUnaffectedHanzi: false,
    }),
}, {
    predicate: char => /[a-zA-Z]/.test(char),
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(7, text),
}];

export { handlers, initialMap, finalMap, specialMap, excludedTonesList };
export default handlers;
