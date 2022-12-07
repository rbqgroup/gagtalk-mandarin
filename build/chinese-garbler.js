import { AllPinyinSet, PinyinToHanziDict, PostProcessSpecialCases, } from './dataset/pinyin.js';
import pinyin from './pinyin.js';
export default class ChineseGarbler {
    constructor(initialMap, finalMap, specialMap, excludedTonesSet = new Set(), options) {
        var _a;
        this.initialMap = initialMap;
        this.finalMap = finalMap;
        this.specialMap = specialMap;
        this.excludedTones = excludedTonesSet;
        this.options = options ?? {};
        (_a = this.options).tone ?? (_a.tone = 'right');
        this.checkUnhandledCases();
    }
    garble(text) {
        return pinyin(text)
            .map((py, index) => {
            const parts = pinyin.parts(py);
            const garbled = this.garblePinyin(py);
            const useTone = !this.excludedTones.has(garbled);
            return (
            // original hanzi if mapped as is
            `${parts.initial}${parts.final}${parts.tone}` == garbled ? text[index] :
                // tone specific hanzi if exists
                (useTone ? PinyinToHanziDict[garbled] : null)
                    ?? (PinyinToHanziDict[garbled.slice(0, -1)]
                        // tone generic hanzi if exists
                        ? PinyinToHanziDict[garbled.slice(0, -1)]
                            + this.getToneChar(pinyin.parts(py).tone)
                        // pinyin letters
                        : ' ' + garbled.slice(0, -1) + ' '));
        })
            .join('');
    }
    garblePinyin(py) {
        const parts = pinyin.parts(py);
        let garbled = this.specialMap[parts.letters] ??
            `${this.initialMap[parts.initial] ?? ''}${this.finalMap[parts.final]}`;
        garbled = PostProcessSpecialCases[garbled] ?? garbled;
        return garbled + (/\d$/.test(garbled) ? '' : parts.tone);
    }
    getToneChar(tone) {
        return this.options.tone == 'above'
            ? ['', ...'̄́̌̀'][tone]
            : this.options.tone == 'right'
                ? ['', ...'ˉˊˇˋ'][tone]
                : '';
    }
    checkUnhandledCases() {
        const set = new Set();
        for (const py of AllPinyinSet) {
            const garbled = this.garblePinyin(py).slice(0, -1);
            if (!PinyinToHanziDict[garbled]) {
                set.add(garbled);
            }
        }
        if (set.size) {
            console.warn(`[WARN] ${set.size} unhandled cases: ${[...set].join(' ')}`);
        }
    }
}
//# sourceMappingURL=chinese-garbler.js.map