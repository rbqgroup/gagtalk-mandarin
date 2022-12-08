import * as hotoo from '@dwscdv3/pinyin';
import { IPinyinOptions } from '@dwscdv3/pinyin/lib/declare.js';
import { AllPinyinSet, Final, PinyinParseSpecialCases, StrictInitial, Tone, ValidPinyin } from './dataset/pinyin.js';

export default function pinyin(text: string, options?: IPinyinOptions) {
    return hotoo.pinyin(text, { segment: true, style: 'tone2', ...options })
        .map(arr => arr[0].replace('v', 'ü'));
}

pinyin.isValid = (py: string): py is ValidPinyin => AllPinyinSet.has(py as ValidPinyin);

pinyin.parts = (py: string): PinyinParts => {
    py = py.replace('v', 'ü');
    const letters = parseInt(py[py.length - 1]) ? py.slice(0, -1) : py;
    if (!pinyin.isValid(letters)) throw new Error('Invalid pinyin.');
    const [initial, final] = PinyinParseSpecialCases[letters] ?? [];
    const tone = parseInt(py.slice(-1));
    return {
        initial: (initial ?? /^([zcs]h?|[bpmfdtnlgkhjqxr])/.exec(py)?.[0]) as StrictInitial,
        final: final ?? /([aoeiuü]\D*|^ng)/.exec(py)![0].replace('u', /^[jqxy]u/.test(py) ? 'ü' : 'u') as Final,
        tone: (tone >= 0 && tone <= 4) ? tone as Tone : 0,
        letters,
    };
};

type PinyinParts = {
    initial: StrictInitial;
    final: Final;
    tone: Tone;
    letters: ValidPinyin;
}
