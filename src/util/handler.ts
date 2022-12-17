import ChineseGarbler, { ChineseGarblerOptions } from '../chinese-garbler.js';
import { ConditionalHandler } from '../index.js';
import KanaGarbler from '../kana-garbler.js';
import BondageClubGarbler, { BondageClubGarblerLevel } from '../lib/bondage-club-garbler.js';
import nzh from 'nzh';
import { isHanzi, isNumeric, isASCIILetter, isKana } from './char.js';
import nzhcn from 'nzh/cn';

export const createHandlers = ({
    chineseGarbler,
    chineseGarblerOptions,
    kanaGarbler,
    bondageClubGarblerLevel,
}: HandlerCreateOptions): ConditionalHandler[] => [{
    predicate: isHanzi,
    func: (text, options) => chineseGarbler.garble(text, {
        ...options,
        ...chineseGarblerOptions,
    }),
}, {
    predicate: isNumeric,
    func: (text, options) => chineseGarbler.garble(nzh.cn.encodeS(text), {
        ...options,
        ...chineseGarblerOptions,
    }),
}, {
    predicate: isASCIILetter,
    func: text => BondageClubGarbler.SpeechGarbleByGagLevel(bondageClubGarblerLevel, text),
}, {
    predicate: isKana,
    func: text => kanaGarbler.garble(text),
}];

export type HandlerCreateOptions = {
    chineseGarbler: ChineseGarbler;
    chineseGarblerOptions?: ChineseGarblerOptions;
    kanaGarbler: KanaGarbler;
    bondageClubGarblerLevel: BondageClubGarblerLevel;
};
