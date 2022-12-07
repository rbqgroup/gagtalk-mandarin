import * as hotoo from 'pinyin';
import { AllPinyinSet, PinyinParseSpecialCases } from './dataset/pinyin.js';
export default function pinyin(text) {
    return hotoo.pinyin(text, { segment: true, style: 'tone2' })
        .map(arr => arr[0].replace('v', 'ü'));
}
pinyin.isValid = (py) => AllPinyinSet.has(py);
pinyin.parts = (py) => {
    py = py.replace('v', 'ü');
    const letters = parseInt(py[py.length - 1]) ? py.slice(0, -1) : py;
    if (!pinyin.isValid(letters))
        throw new Error('Invalid pinyin.');
    const [initial, final] = PinyinParseSpecialCases[letters] ?? [];
    const tone = parseInt(py.slice(-1));
    return {
        initial: (initial ?? /^([zcs]h?|[bpmfdtnlgkhjqxr])/.exec(py)?.[0]),
        final: final ?? /([aoeiuü]\D*|^ng)/.exec(py)[0].replace('u', /^[jqxy]u/.test(py) ? 'ü' : 'u'),
        tone: (tone >= 0 && tone <= 4) ? tone : 0,
        letters,
    };
};
//# sourceMappingURL=pinyin.js.map