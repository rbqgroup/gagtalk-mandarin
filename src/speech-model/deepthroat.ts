import ChineseGarbler, { FinalMap, InitialMap, SpecialMap } from '../chinese-garbler.js';
import { DefinedPronunciation } from '../dataset/pinyin.js';
import KanaGarbler, { ConsonantMap, VowelMap } from '../kana-garbler.js';
import { createHandlers } from '../util/handler.js';

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

const consonantMap: ConsonantMap = {
    k: 'g',
    g: 'g',
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
    chineseGarblerOptions: {
        toneStyle: 'none',
        preserveUnaffectedHanzi: false,
    },
    kanaGarbler,
    bondageClubGarblerLevel: 7,
});

export { handlers, initialMap, finalMap, specialMap, excludedTonesList, consonantMap, vowelMap };
export default handlers;
